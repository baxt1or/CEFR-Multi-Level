"use client";
import React, { useState } from "react";
import axios from "axios";

interface Paragraph {
  text: string;
}

interface Option {
  text: string;
}

interface Question {
  text: string;
}

interface HeadingFormData {
  headingTitle: string;
  paragraphs: Paragraph[];
  options: Option[];
  questions: Question[];
}

const CreateHeadingForm: React.FC = () => {
  const [formData, setFormData] = useState<HeadingFormData>({
    headingTitle: "",
    paragraphs: [{ text: "" }],
    options: [{ text: "" }],
    questions: [{ text: "" }],
  });

  // Handle input change for heading title
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, headingTitle: e.target.value });
  };

  // Handle change for paragraphs, options, and questions arrays
  const handleArrayChange = (
    index: number,
    field: keyof HeadingFormData,
    value: string
  ) => {
    const newArray = [...(formData[field] as any)];
    newArray[index].text = value;
    setFormData({ ...formData, [field]: newArray });
  };

  // Add new entry for paragraphs, options, or questions
  const addEntry = (field: keyof HeadingFormData) => {
    const newArray = [...(formData[field] as any), { text: "" }];
    setFormData({ ...formData, [field]: newArray });
  };

  // Remove entry for paragraphs, options, or questions
  const removeEntry = (field: keyof HeadingFormData, index: number) => {
    const newArray = (formData[field] as any).filter(
      (_: any, i: number) => i !== index
    );
    setFormData({ ...formData, [field]: newArray });
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000", // Your FastAPI URL
        formData
      );
      console.log("Heading created:", response.data);
    } catch (error) {
      console.error("Error creating heading:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Heading Title */}
      <div>
        <label htmlFor="headingTitle">Heading Title</label>
        <input
          type="text"
          id="headingTitle"
          value={formData.headingTitle}
          onChange={handleTitleChange}
          required
        />
      </div>

      {/* Paragraphs */}
      <div>
        <h3>Paragraphs</h3>
        {formData.paragraphs.map((paragraph, index) => (
          <div key={index}>
            <input
              type="text"
              value={paragraph.text}
              onChange={(e) =>
                handleArrayChange(index, "paragraphs", e.target.value)
              }
              placeholder={`Paragraph ${index + 1}`}
              required
            />
            <button
              type="button"
              onClick={() => removeEntry("paragraphs", index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addEntry("paragraphs")}>
          Add Paragraph
        </button>
      </div>

      {/* Options */}
      <div>
        <h3>Options</h3>
        {formData.options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option.text}
              onChange={(e) =>
                handleArrayChange(index, "options", e.target.value)
              }
              placeholder={`Option ${index + 1}`}
              required
            />
            <button type="button" onClick={() => removeEntry("options", index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addEntry("options")}>
          Add Option
        </button>
      </div>

      {/* Questions */}
      <div>
        <h3>Questions</h3>
        {formData.questions.map((question, index) => (
          <div key={index}>
            <input
              type="text"
              value={question.text}
              onChange={(e) =>
                handleArrayChange(index, "questions", e.target.value)
              }
              placeholder={`Question ${index + 1}`}
              required
            />
            <button
              type="button"
              onClick={() => removeEntry("questions", index)}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => addEntry("questions")}>
          Add Question
        </button>
      </div>

      {/* Submit Button */}
      <button type="submit">Submit Heading</button>
    </form>
  );
};

export default CreateHeadingForm;
