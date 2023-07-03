const submitbtn = document.querySelector('[type=submit]');
const backbtn = document.querySelector('#back');

const submitForm = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#first_name').value.trim();
  const lastName = document.querySelector('#last_name').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const age = document.querySelector('#age').value.trim();
  const race = document.querySelector('#race').value.trim();
  const insuranceName = document.querySelector('#insurancename').value.trim();
  const occupation = document.querySelector('#occupation').value.trim();
  const address = document.querySelector('#address').value.trim();
  const phoneNo = document.querySelector('#phoneno').value.trim();
  const knownConditions = document.getElementsByName('knownconditions');
  const allergies = document.getElementsByName('allergies');

  const healthDetailsextTable = [];
  if (knownConditions.length !== 0) {
    for (var i = 0; i < knownConditions.length; i++) {
      if (knownConditions[i].checked && knownConditions[i].value !== 'None') {
        healthDetailsextTable.push({
          condition: knownConditions[i].value,
          type: 'knowncondition',
        });
      }
    }
  }
  if (allergies.length !== 0) {
    for (var i = 0; i < allergies.length; i++) {
      if (allergies[i].checked && allergies[i].value !== 'None') {
        healthDetailsextTable.push({
          condition: allergies[i].value,
          type: 'allergies',
        });
      }
    }
  }

  if (firstName !== '' && lastName !== '' && age !== '') {
    const response = await fetch('/api/newpatient', {
      method: 'POST',
      body: JSON.stringify({
        firstName,
        lastName,
        gender,
        address,
        age,
        race,
        insuranceName,
        occupation,
        phoneNo,
        healthDetailsextTable,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create Patientdetails');
    }
  } else {
    alert('Firstname, Lastname and Age are required Fields');
  }
};

const backtodashboard = () => {
  document.location.replace('/dashboard');
};

submitbtn.addEventListener('click', submitForm);
backbtn.addEventListener('click', backtodashboard);
