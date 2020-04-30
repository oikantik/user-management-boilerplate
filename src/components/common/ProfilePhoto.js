import React, { Fragment } from "react";

import { useDropzone } from "react-dropzone";

const ProfilePhoto = ({ setFieldValue }) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    rejectedFiles,
  } = useDropzone({
    accept: "image/*",
    maxSize: 1048576,
    maxFiles: 1,
    multiple: false,
    onDrop: (avatar) => {
      setFieldValue("avatar", avatar);
    },
  });

  const acceptedFilesItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Fragment>
      <div className="avatar-upload">
        {}
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          {!(isDragActive && acceptedFilesItems.length <= 0) &&
            "Click here or drop a file to upload!"}
          {isDragActive && !isDragReject && "Drop the file here"}
          {isDragReject && "File type not accepted, sorry!"}
          {rejectedFiles && "File is too large."}
        </div>
      </div>
      <ul>{acceptedFilesItems}</ul>
    </Fragment>
  );
};

export default ProfilePhoto;
