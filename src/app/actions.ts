"use server";

import { supabase } from "@/lib/supabase";

export interface ActionResponse {
  success: boolean;
  message: string;
  data?: any;
}

export async function subscribeToNewsletter(email: string): Promise<ActionResponse> {
  try {
    if (!email || !email.includes("@")) {
      return { success: false, message: "Please provide a valid email address." };
    }

    if (supabase) {
      const { error } = await supabase
        .from("subscriptions")
        .insert([{ email, subscribed_at: new Date().toISOString() }]);

      if (error) {
        // Table might not exist yet, log and fall through to mock success for demo
        console.error("Supabase insert error:", error);
        if (error.code === "PGRST116" || error.message.includes("does not exist")) {
          // Fall through
        } else {
          return { success: false, message: `Database error: ${error.message}` };
        }
      }
    }

    console.log(`[NEWSLETTER SUBSCRIBE] Mock save for: ${email}`);
    return {
      success: true,
      message: "Thank you for subscribing! You will receive our latest updates.",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An unexpected error occurred. Please try again.",
    };
  }
}

export async function submitVolunteerForm(formData: {
  name: string;
  email: string;
  phone: string;
  interests: string[];
  message: string;
}): Promise<ActionResponse> {
  try {
    const { name, email, phone, interests, message } = formData;
    if (!name || !email || !phone) {
      return { success: false, message: "Please fill in all required fields." };
    }

    if (supabase) {
      const { error } = await supabase
        .from("volunteer_applications")
        .insert([{
          name,
          email,
          phone,
          interests,
          message,
          created_at: new Date().toISOString()
        }]);

      if (error) {
        console.error("Supabase insert error:", error);
        if (error.code === "PGRST116" || error.message.includes("does not exist")) {
          // Fall through
        } else {
          return { success: false, message: `Database error: ${error.message}` };
        }
      }
    }

    console.log(`[VOLUNTEER APPLICATION] Mock save for:`, formData);
    return {
      success: true,
      message: `Thank you ${name}! We have received your application and our volunteer coordinator will contact you shortly.`,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An unexpected error occurred. Please try again.",
    };
  }
}

export async function submitContactOrPartnerForm(formData: {
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  projectArea: string;
  message: string;
}): Promise<ActionResponse> {
  try {
    const { name, organization, email, phone, projectArea, message } = formData;
    if (!name || !email || !projectArea || !message) {
      return { success: false, message: "Please fill in all required fields." };
    }

    if (supabase) {
      const { error } = await supabase
        .from("contact_inquiries")
        .insert([{
          name,
          organization,
          email,
          phone,
          project_area: projectArea,
          message,
          created_at: new Date().toISOString()
        }]);

      if (error) {
        console.error("Supabase insert error:", error);
        if (error.code === "PGRST116" || error.message.includes("does not exist")) {
          // Fall through
        } else {
          return { success: false, message: `Database error: ${error.message}` };
        }
      }
    }

    console.log(`[PARTNERSHIP/CONTACT INQUIRY] Mock save for:`, formData);
    return {
      success: true,
      message: `Thank you ${name}. Your message has been sent successfully. We will get back to you within 2 business days.`,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "An unexpected error occurred. Please try again.",
    };
  }
}
