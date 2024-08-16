chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: fillForm
    });
  });
  
  function fillForm() {
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
  
    const inputs = document.querySelectorAll('input[type="text"]');
    const date = document.querySelectorAll('input[type="date"]');

    if(date.length>0){
      date[0].focus();
      date[0].value = "";
      date[0].value = formData.field36;
      date[0].dispatchEvent(new Event('input', { bubbles: true }));
    }
  
    if (inputs.length > 0) {
      inputs[0].focus();
      inputs[0].value = "";
      inputs[0].value = formData.field1;
      inputs[0].dispatchEvent(new Event('input', { bubbles: true }));
    }
  
    if (inputs.length > 1) {
      inputs[1].focus();
      inputs[1].value = "";
      inputs[1].value = formData.field2;
      inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
    }
  
    if (inputs.length > 2) {
      inputs[2].focus();
      inputs[2].value = "";
      inputs[2].value = formData.field3;
      inputs[2].dispatchEvent(new Event('input', { bubbles: true }));
    }
  
    if (inputs.length > 3) {
      inputs[3].focus();
      inputs[3].value = "";
      inputs[3].value = formData.field4;
      inputs[3].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 4) {
      inputs[4].focus();
      inputs[4].value = "";
      inputs[4].value = formData.field5;
      inputs[4].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 5) {
      inputs[5].focus();
      inputs[5].value = "";
      inputs[5].value = formData.field6;
      inputs[5].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 6) {
      inputs[6].focus();
      inputs[6].value = "";
      inputs[6].value = formData.field7;
      inputs[6].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 7) {
      inputs[7].focus();
      inputs[7].value = "";
      inputs[7].value = formData.field8;
      inputs[7].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 8) {
      inputs[8].focus();
      inputs[8].value = "";
      inputs[8].value = formData.field9;
      inputs[8].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 9) {
      inputs[9].focus();
      inputs[9].value = "";
      inputs[9].value = formData.field10;
      inputs[9].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 10) {
      inputs[10].focus();
      inputs[10].value = "";
      inputs[10].value = formData.field11;
      inputs[10].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 11) {
      inputs[11].focus();
      inputs[11].value = "";
      inputs[11].value = formData.field12;
      inputs[11].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 12) {
        inputs[12].focus();
        inputs[12].value = "";
        inputs[12].value = formData.field13;
        inputs[12].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 13) {
        inputs[13].focus();
        inputs[13].value = "";
        inputs[13].value = formData.field14;
        inputs[13].dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    if (inputs.length > 14) {
        inputs[14].focus();
        inputs[14].value = "";
        inputs[14].value = formData.field15;
        inputs[14].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 15) {
        inputs[15].focus();
        inputs[15].value = "";
        inputs[15].value = formData.field16;
        inputs[15].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 16) {
        inputs[16].focus();
        inputs[16].value = "";
        inputs[16].value = formData.field17;
        inputs[16].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 17) {
        inputs[17].focus();
        inputs[17].value = "";
        inputs[17].value = formData.field18;
        inputs[17].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 18) {
        inputs[18].focus();
        inputs[18].value = "";
        inputs[18].value = formData.field19;
        inputs[18].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 19) {
        inputs[19].focus();
        inputs[19].value = "";
        inputs[19].value = formData.field20;
        inputs[19].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 20) {
        inputs[20].focus();
        inputs[20].value = "";
        inputs[20].value = formData.field21;
        inputs[20].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 21) {
        inputs[21].focus();
        inputs[21].value = "";
        inputs[21].value = formData.field22;
        inputs[21].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 22) {
        inputs[22].focus();
        inputs[22].value = "";
        inputs[22].value = formData.field23;
        inputs[22].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 23) {
        inputs[23].focus();
        inputs[23].value = "";
        inputs[23].value = formData.field24;
        inputs[23].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 24) {
        inputs[24].focus();
        inputs[24].value = "";
        inputs[24].value = formData.field25;
        inputs[24].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 25) {
        inputs[25].focus();
        inputs[25].value = "";
        inputs[25].value = formData.field26;
        inputs[25].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 26) {
        inputs[26].focus();
        inputs[26].value = "";
        inputs[26].value = formData.field27;
        inputs[26].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 27) {
        inputs[27].focus();
        inputs[27].value = "";
        inputs[27].value = formData.field28;
        inputs[27].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 28) {
        inputs[28].focus();
        inputs[28].value = "";
        inputs[28].value = formData.field29;
        inputs[28].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 29) {
        const textareas = document.querySelectorAll('textarea');
        
        if (textareas.length > 0) {
            textareas[0].focus();
            textareas[0].value = "";
            textareas[0].value = formData.field30;
            textareas[0].dispatchEvent(new Event('input', { bubbles: true }));
        }

    }

    if(inputs.length>30){
        const textareas = document.querySelectorAll('textarea');

        if (textareas.length > 1) {
            textareas[1].focus();
            textareas[1].value = "";
            textareas[1].value = formData.field31;
            textareas[1].dispatchEvent(new Event('input', { bubbles: true }));
        }
    }

    if (inputs.length > 31) {
        inputs[31].focus();
        inputs[31].value = "";
        inputs[31].value = formData.field32;
        inputs[31].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 32) {
        inputs[32].focus();
        inputs[32].value = "";
        inputs[32].value = formData.field33;
        inputs[32].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 33) {
        inputs[33].focus();
        inputs[33].value = "";
        inputs[33].value = formData.field34;
        inputs[33].dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (inputs.length > 34) {
        inputs[34].focus();
        inputs[34].value = "";
        inputs[34].value = formData.field35;
        inputs[34].dispatchEvent(new Event('input', { bubbles: true }));
    }

    const radioGroups = document.querySelectorAll('div[role="radiogroup"]');

    // First group: Select the 2nd option
    if (radioGroups.length > 0) {
        const optionsInFirstGroup = radioGroups[0].querySelectorAll('div[role="radio"]');
        if (optionsInFirstGroup.length > 1) {
            optionsInFirstGroup[0].click(); 
        }
    }

    // Second group: Select the 3rd option
    if (radioGroups.length > 1) {
        const optionsInSecondGroup = radioGroups[1].querySelectorAll('div[role="radio"]');
        if (optionsInSecondGroup.length > 1) {
            optionsInSecondGroup[0].click(); 
        }
    }

    // Third group: Select the 1st option
    if (radioGroups.length > 2) {
        const optionsInThirdGroup = radioGroups[2].querySelectorAll('div[role="radio"]');
        if (optionsInThirdGroup.length > 0) {
            optionsInThirdGroup[0].click();
        }
    }

    // Fourth group: Select the 2nd option
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

    const checkboxDivs = document.querySelectorAll('div[role="checkbox"]');

    // Example: Selecting the first three checkboxes
    if (checkboxDivs.length > 0) {
        checkboxDivs[0].click();  // Click to select the first checkbox
    }

    // Select the "Add file" button using the aria-label or class name
    const addFileButton = document.querySelector('div[aria-label="Add file"]');

    if (addFileButton) {
        addFileButton.click(); // This will trigger the file picker dialog
    }

  }