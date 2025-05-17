"use client";
import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Strikethrough,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const defaultMarkdown = `
**Pricing**

**Lawn:** $50.00
**Hedges:** $100.00
`;

const MarkdownPlayground = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textAlign, setTextAlign] = useState("text-start");

  const applyStyle = (style: "bold" | "italic" | "strikethrough") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.slice(start, end);

    let wrapped = selectedText;
    if (style === "bold") wrapped = `**${selectedText || "bold text"}**`;
    if (style === "italic") wrapped = `*${selectedText || "italic text"}*`;
    if (style === "strikethrough")
      wrapped = `~~${selectedText || "strikethrough"}~~`;

    const newMarkdown =
      markdown.slice(0, start) + wrapped + markdown.slice(end);
    setMarkdown(newMarkdown);

    // Reset cursor position after update
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + 2, start + wrapped.length - 2);
    }, 0);
  };

  return (
    <div className="w-full min-h-screen flex gap-6 justify-center items-start p-10 bg-gray-100">
      <div className="w-[45%]">
        <ToggleGroup type="multiple" className="mb-4">
          <ToggleGroupItem
            onClick={() => applyStyle("bold")}
            value="bold"
            aria-label="Toggle bold"
          >
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => applyStyle("italic")}
            value="italic"
            aria-label="Toggle italic"
          >
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => applyStyle("strikethrough")}
            value="strikethrough"
            aria-label="Toggle strikethrough"
          >
            <Strikethrough className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => setTextAlign("text-start")}
            value="align-left"
            aria-label="Toggle strikethrough"
          >
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => setTextAlign("text-center")}
            value="align-center"
            aria-label="Toggle strikethrough"
          >
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={() => setTextAlign("text-end")}
            value="align-right"
            aria-label="Toggle strikethrough"
          >
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        <textarea
          ref={textareaRef}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          className="w-full h-[500px] p-4 border rounded resize-none font-mono text-sm bg-white"
          placeholder="Write your markdown here..."
        />
      </div>

      <div
        className={`w-[45%] markdown bg-white p-6 rounded shadow overflow-auto ${textAlign}`}
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownPlayground;
