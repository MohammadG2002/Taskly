const getAttachmentName = (attachment: string): string => {
  return attachment.split("/").pop() || "attachment";
};

export default getAttachmentName;
