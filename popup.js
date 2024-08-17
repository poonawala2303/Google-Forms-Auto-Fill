document.getElementById('fillForm').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: fillForm
      });
    });
  });

// Scroll to the top after filling the form
document.getElementById('fillForm').addEventListener('click', function() {
    window.scrollTo(0, 0); 
    });

// Close the popup window
document.getElementById('closePopup').addEventListener('click', function() {
        window.close(); 
    });

// Main Function For filling the form
function fillForm() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const formData = {
      field1: "16010421083",
      field2: "0",
      field3: "Mustafa",
      field4: "Aliakber",
      field5: "Poonawala",
      field6: "Indian",
      field7: "20",
      field8: "8108279310",
      field9: "poonawala2303@gmail.com",
      field10: "86.20",
      field11: "2019",
      field12: "Maharashtra State Board of Secondary & Higher Secondary Education",
      field13: "89.60",
      field14: "2021",
      field15: "Maharashtra State Board of Secondary & Higher Secondary Education",
      field16: "NA",
      field17: "2021",
      field18: "9.048",
      field19: "9.29",
      field20: "8.5",
      field21: "9.27",
      field22: "9.32",
      field23: "8.82",
      field24: "8.94",
      field25: "0",
      field26: "0",
      field27: "0",
      field28: "0",
      field29: "0",
      field30: "1. PredictEdge: Developed a system to predict stock market trends using Neo4j and " +
              "machine learning techniques.\n" +
              "2. Realtime Chat App: Created a real-time chat application with secure user authentication " +
              "and robust database integration.\n" +
              "3. Weather App Project: Built a weather app using Open Weather API and React.js.\n" +
              "4. Petruccio Pizza: Designed a user-friendly food delivery website with HTML, CSS, " +
              "and JavaScript.\n" +
              "5. Airline Management System: Developed an airline management platform using Java, " +
              "JDBC, and MySQL.\n" +
              "6. Random Password Generator: Created a Python-based tool for generating and storing " +
              "random passwords using Tkinter.",
      field31: "On my insightful journey through the diverse internship experiences, I have harnessed " +
              "a wide array of technical and creative skills:\n\n" +
              "1. Cyber Security Analyst Intern: Conducted in-depth analysis of vulnerabilities and safeguarded critical data assets.\n" +
              "2. Web Development Intern: Created user-friendly websites, gaining hands-on experience in HTML, CSS, JavaScript, and more.\n" +
              "3. In-house Internship at KJSCE: Developed a Proctorial Management System, integrating robust security and data visualization tools.\n" +
              "4. Social Media Intern: Crafted engaging short-form video content, enhancing storytelling and creativity skills.",
      field32: "NA",
      field33: "NA",
      field34: "Navi Mumbai",
      field35: "Navi Mumbai",
      field36: "2003-09-23"
    };
  
    // Loop for filling all the input fields whose type is "text"
    const inputs = document.querySelectorAll('input[type="text"]');

    for (let i = 0; i < 29; i++) {
        if (inputs.length > i) {
        inputs[i].focus();
        inputs[i].value = "";
        inputs[i].value = formData[`field${i + 1}`];
        inputs[i].dispatchEvent(new Event('input', { bubbles: true }));
        }
    }

    for (let i = 29; i < 33; i++) {
        if (inputs.length > i) {
        inputs[i].focus();
        inputs[i].value = "";
        inputs[i].value = formData[`field${i + 3}`];
        inputs[i].dispatchEvent(new Event('input', { bubbles: true }));
        }
    }

    // Filling the input field where type = "date"
    const date = document.querySelectorAll('input[type="date"]');

    if(date.length>0){
      date[0].focus();
      date[0].value = "";
      date[0].value = formData.field36;
      date[0].dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Loop for filling all the input fields whose type is "textarea"
    const textareas = document.querySelectorAll('textarea');

    for (let i = 0; i < 2; i++) {
        if (textareas.length > i) {
            textareas[i].focus();
            textareas[i].value = "";
            textareas[i].value = formData[`field${i + 30}`];
            textareas[i].dispatchEvent(new Event('input', { bubbles: true }));
        } 
    }

    // Filling all the input fields whose role = "radiogroup" . Selecting 'role' attribute because there was nothing like {input type="radio"} in google form
    const radioGroups = document.querySelectorAll('div[role="radiogroup"]');

    if (radioGroups.length > 0) {
        const optionsInFirstGroup = radioGroups[0].querySelectorAll('div[role="radio"]');
        if (optionsInFirstGroup.length > 1) {
            optionsInFirstGroup[0].click(); 
        }
    }

    if (radioGroups.length > 1) {
        const optionsInSecondGroup = radioGroups[1].querySelectorAll('div[role="radio"]');
        if (optionsInSecondGroup.length > 1) {
            optionsInSecondGroup[0].click(); 
        }
    }

    if (radioGroups.length > 2) {
        const optionsInThirdGroup = radioGroups[2].querySelectorAll('div[role="radio"]');
        if (optionsInThirdGroup.length > 0) {
            optionsInThirdGroup[0].click();
        }
    }

    if (radioGroups.length > 3) {
        const optionsInFourthGroup = radioGroups[3].querySelectorAll('div[role="radio"]');
        if (optionsInFourthGroup.length > 2) {
            optionsInFourthGroup[1].click(); // Selects the 2nd option in the fourth group
        }
    }

    if (radioGroups.length > 4) {
        const optionsInFourthGroup = radioGroups[4].querySelectorAll('div[role="radio"]');
        if (optionsInFourthGroup.length > 1) {
            optionsInFourthGroup[0].click(); // Selects the 2nd option in the fourth group
        }
    }

    if (radioGroups.length > 5) {
        const optionsInFourthGroup = radioGroups[5].querySelectorAll('div[role="radio"]');
        if (optionsInFourthGroup.length > 1) {
            optionsInFourthGroup[0].click(); // Selects the 2nd option in the fourth group
        }
    }

    if (radioGroups.length > 6) {
        const optionsInFourthGroup = radioGroups[6].querySelectorAll('div[role="radio"]');
        if (optionsInFourthGroup.length > 1) {
            optionsInFourthGroup[1].click(); // Selects the 2nd option in the fourth group
        }
    }

    if (radioGroups.length > 7) {
        const optionsInFourthGroup = radioGroups[7].querySelectorAll('div[role="radio"]');
        if (optionsInFourthGroup.length > 1) {
            optionsInFourthGroup[1].click(); // Selects the 2nd option in the fourth group
        }
    }

    if (radioGroups.length > 8) {
        const optionsInFourthGroup = radioGroups[8].querySelectorAll('div[role="radio"]');
        if (optionsInFourthGroup.length > 1) {
            optionsInFourthGroup[0].click(); // Selects the 2nd option in the fourth group
        }
    }

    // Filling the checkbox fields whose role = "checkbox" . Selecting 'role' attribute because there was nothing like {input type="checkbox"} in google form
    const checkboxDivs = document.querySelectorAll('div[role="checkbox"]');

    if (checkboxDivs.length > 0) {
        checkboxDivs[0].click();  
    }

    // Select the "Add file" button using the aria-label or class name
    const addFileButton = document.querySelector('div[aria-label="Add file"]');

    if (addFileButton) {
        addFileButton.click(); // This will trigger the file picker dialog
    }
    window.scrollTo(0, scrollTop);
}
  
  