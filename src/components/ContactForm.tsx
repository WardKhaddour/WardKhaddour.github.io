"use client";

import { sendEmail } from "@/actions/send-email";
import { useRef, useState, useTransition } from "react";
import * as z from "zod";

export const sendEmailSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
type FormData = z.infer<typeof sendEmailSchema>;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isPending, startTransition] = useTransition();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  const validateForm = (data: FormData) => {
    const result = sendEmailSchema.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setFormErrors({
        name: errors.name?.[0],
        email: errors.email?.[0],
        subject: errors.subject?.[0],
        message: errors.message?.[0],
      });
      return false;
    }

    setFormErrors({});
    setSubmitStatus("idle");
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as FormData;
    if (!validateForm(data)) {
      return;
    }

    startTransition(async () => {
      try {
        const response = await sendEmail(data);
        if (response.success) {
          setSubmitStatus("success");
          formRef.current?.reset();
        } else {
          setSubmitStatus("error");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitStatus("error");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-0 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white ${
            formErrors.name
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          }`}
        />
        {formErrors.name && (
          <p className="mt-1 text-sm text-red-500">{formErrors.name}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Your Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-0 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white ${
            formErrors.email
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          }`}
        />
        {formErrors.email && (
          <p className="mt-1 text-sm text-red-500">{formErrors.email}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-0 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white ${
            formErrors.subject
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          }`}
        />
        {formErrors.subject && (
          <p className="mt-1 text-sm text-red-500">{formErrors.subject}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-0 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:text-white ${
            formErrors.message
              ? "border-red-500"
              : "border-gray-300 dark:border-gray-600"
          }`}
        ></textarea>
        {formErrors.message && (
          <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
        )}
      </div>

      {submitStatus === "success" && (
        <div className="p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-900 dark:text-green-200">
          Message sent successfully!
        </div>
      )}
      {submitStatus === "error" && (
        <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-900 dark:text-red-200">
          Failed to send message. Please try again later.
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-0 cursor-pointer focus:bg-red-700"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
