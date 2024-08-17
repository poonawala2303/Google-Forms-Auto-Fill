# Google Form Auto-Filler

## Overview

This project automates filling out Google Forms for placements of KJSCE students by pre-populating fields and selecting options like radio buttons and checkboxes with the help of an extension. The extension allows for the quick submission of company registration forms for placement with pre-defined data.

## Features

- **Auto-fill Form Fields**: Automatically fills out text fields, dropdowns, and other input elements.
- **Radio Button and Checkbox Selection**: Automatically selects the correct radio buttons and checkboxes based on pre-defined data.
- **File Upload**: Triggres the File Upload when you click the "Fill Form" button.
- **Popup Interface**: Includes a user-friendly popup interface for controlling the auto-filler script.
- **Close Button**: The popup interface includes a "Close" button for easy dismissal.

## How It Works

1. **Data Pre-population**: The script uses a predefined set of data stored in a `formData` object. This data is then applied to the form fields in sequence.
2. **Element Selection**: The script locates each form field, radio button, and checkbox using `querySelectorAll` and interacts with these elements by simulating user actions such as clicking and inputting text.
3. **File Upload**: The script triggers the file upload dialog and automatically selects and uploads a file.
4. **Form Submission**: Once all fields are populated, the form is ready for manual submission or further automation.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/google-form-auto-filler.git
   cd google-form-auto-filler

2. **Add Your Data**:
   Modify the formData object in the script to include the data you want to populate in the form.
   
2. **Run the Extension**:
   Open your browser, navigate to the Google Form you want to fill, and run the extension.

   - Navigate to chrome://extensions
   - Switch the Developer Mode to "On"
   - Upload the folder which contains all the files
   - After uploading, navigate to the Placement form that you want to fill out and run this extension !! 

## Usage

1. Form Data Configuration:
Update the formData object with the correct data corresponding to your Google Form fields.

```bash
const formData = {
    field1: "John Doe",
    field2: "john.doe@example.com",
    // Add more fields as needed
};
```
2. Execute the Script:
Inject the script into the Google Form page. This can be done via the browser's developer console or by using a browser extension like Tampermonkey.

4. Close the Popup:
Use the "Close" button to dismiss the popup after the form has been filled.

## Example 
```bash
const formData = {
    field1: "John Doe",
    field2: "john.doe@example.com",
    field3: "123-456-7890",
    field4: "Some address",
    // Add more fields and values as needed
};
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your improvements.

## Contact 

If you have any questions or feedback, feel free to reach out to me via poonawala2303@gmail.com.
