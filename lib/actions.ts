"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function unlockCaseStudies(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const password = formData.get("password") as string;
  const redirectTo =
    (formData.get("redirect") as string) || "/case-studies";

  if (password === process.env.CASE_STUDY_PASSWORD) {
    const cookieStore = await cookies();
    cookieStore.set("case_study_auth", "1", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    redirect(redirectTo);
  }

  return { error: "Incorrect password. Try again." };
}
