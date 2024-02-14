import { useState } from "react";
import Layout from "@/components/layout";
import RichTextEditor from "@/components/textEditor";
import AlertComponent from "@/components/alert";
import { useMutation } from "@apollo/client";
import { CREATE_BLOG_POST } from "@/lib/gql";

export default function AddBlogPost(props) {
  const [createBlog, { data, loading, error }] = useMutation(CREATE_BLOG_POST);
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = async () => {
    if (formData.title.trim().length < 5) {
      return setAlert({
        type: "error",
        message: "Post title must be at least 5 characters long",
      });
    }
    if ((formData.content || "").trim().length < 20) {
      return setAlert({
        type: "error",
        message: "Post content must be at least 20 characters long",
      });
    }

    try {
      const res = await createBlog({
        variables: {
          title: formData.title,
          content: formData.content,
        },
      });
      setAlert({ message: "Blog Post created successfully", type: "success" });
    } catch (error) {
      setAlert({ message: "Failed to create blog post", type: "error" });
    }
  };

  const handleFormDataChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
    setAlert({ message: "", type: "" });
  };

  const renderAlert = () => {
    if (!Boolean(alert?.message ?? "")) {
      return null;
    }
    return (
      <div className="my-10" id={`alert_${alert.type}`}>
        <AlertComponent {...alert} />
      </div>
    );
  };

  return (
    <Layout>
      <div className="flex justify-center font-[sans-serif] text-[#333] sm:h-screen">
        <div className="max-w-2xl w-full mx-auto p-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-50">
              Add Blog Post
            </h2>
          </div>
          {renderAlert()}
          <form>
            <div className="space-y-6">
              <div>
                <label className="text-sm mb-2 block" htmlFor="title">
                  Blog Title
                </label>
                <input
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={({ target }) =>
                    handleFormDataChange("title", target.value)
                  }
                  className="bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500"
                  placeholder="Enter blog title"
                />
              </div>
              <div>
                <label className="text-sm mb-2 block" htmlFor="content">
                  Blog Description
                </label>
                <RichTextEditor
                  value={formData.content}
                  onChange={(content) =>
                    handleFormDataChange("content", content)
                  }
                />
              </div>
            </div>
            <div className="!mt-10">
              <button
                onClick={handleSubmit}
                type="button"
                className="w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
