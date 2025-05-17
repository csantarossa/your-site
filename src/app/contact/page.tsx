"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Mail, Send } from "lucide-react";
import React, { useState } from "react";

type ContactForm = {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  attachments: string | number | readonly string[] | undefined;
  inquiry: string;
};

const Page = () => {
  const [formContent, setFormContent] = useState<ContactForm>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    attachments: undefined,
    inquiry: "",
  });

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-12">
      <form className="w-96 flex flex-col gap-4 border rounded-xl p-5">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <Mail />
        </div>
        <div>
          <Label className="text-sm font-medium ">Firstname *</Label>
          <Input
            type="text"
            value={formContent.firstname}
            onChange={(e) =>
              setFormContent({ ...formContent, firstname: e.target.value })
            }
          />
        </div>
        <div>
          <Label className="text-sm font-medium">Lastname *</Label>
          <Input
            type="text"
            value={formContent.lastname}
            onChange={(e) =>
              setFormContent({ ...formContent, lastname: e.target.value })
            }
          />
        </div>
        <div>
          <Label className="text-sm font-medium">Email *</Label>
          <Input
            type="text"
            value={formContent.email}
            onChange={(e) =>
              setFormContent({ ...formContent, email: e.target.value })
            }
          />
        </div>
        <div>
          <Label className="text-sm font-medium">Phone *</Label>
          <Input
            type="text"
            value={formContent.phone}
            onChange={(e) =>
              setFormContent({ ...formContent, phone: e.target.value })
            }
          />
        </div>
        <div>
          <Label className="text-sm font-medium">Attachments</Label>
          <Input
            type="file"
            value={formContent.attachments}
            onChange={(e) =>
              setFormContent({ ...formContent, attachments: e.target.value })
            }
          />
        </div>
        <div>
          <Label className="text-sm font-medium">Inquiry *</Label>
          <Textarea
            maxLength={250}
            value={formContent.inquiry}
            onChange={(e) =>
              setFormContent({ ...formContent, inquiry: e.target.value })
            }
          />
        </div>
        <Button type="submit">
          Send <Send />
        </Button>
      </form>
    </div>
  );
};

export default Page;
