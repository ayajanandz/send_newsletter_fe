import React, { useState } from 'react';

const YourComponent = () => {
  const [pdfFile, setPdfFile] = useState(null);

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  const handleSendEmails = async () => {
    const formData = new FormData();
    formData.append('pdfFile', pdfFile);

    try {
      const response = await fetch('http://localhost:3001/send-emails', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Emails sent successfully!');
      } else {
        console.error('Error sending emails:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending emails:', error.message);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSendEmails}>Send Emails</button>
    </div>
  );
};

export default YourComponent;
