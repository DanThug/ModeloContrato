const getEmployerCnpj = document.querySelector('#getEmployerCnpj');
const generateContractButton = document.querySelector('#generateContractButton');
const newEmployerForm = document.querySelector('#newEmployerForm');
const showHideButton = document.querySelector('#show-hide-button');
const newEmployerCopyButton = document.querySelector('#newEmployerCopyButton');
const newEmployerTextarea = document.querySelector('#newEmployerTextarea');
const newEmployerCnpj = document.querySelector('#newEmployerCnpj');
const newEmployerAddressZipcode = document.querySelector('#newEmployerAddressZipcode');

const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthNames = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return `São Paulo, ${day} de ${monthNames[month]} de ${year}`;
}

//Mascara CNPJ
const cnpjMask = e => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/^(\d{2})(\d)/, "$1.$2");
    inputValue = inputValue.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    inputValue = inputValue.replace(/\.(\d{3})(\d)/, ".$1/$2");
    inputValue = inputValue.replace(/(\d{4})(\d)/, "$1-$2");

    return e.target.value = inputValue;
}

//Mascara CEP
const cepMask = e => e.target.value = e.target.value.replace(/^(\d{5})(\d)/, "$1-");

//Exibir ou ocultar tela para cadastro de novo cliente
const showHideNewEmployer = () => {
    document.querySelector('[data-js="new-employer"]').classList.toggle('hide');
    document.querySelector('[data-js="plus-minus-icon"]').classList.toggle('glyphicon-minus');
}

//Verificar se cadastro já existe
const checkIfEmployerExists = () => {
    const employerExists = getFilteredEmployer();
    if (employerExists) {
        alert();
    }
}

//Exibir ou ocultar texto contendo informações sobre o relogio
const showEquipmentText = () => {
    const getAmountEquip = document.querySelector('#getAmountEquip');
    const equipments = document.querySelectorAll('[data-js="equipment"]');

    if (Number(getAmountEquip.value) > 0) {
        equipments.forEach(equipment => equipment.classList.remove('hide'));
        return;
    }
    
    equipments.forEach(equipment => equipment.classList.add('hide'));
}

/* const clientsObj = () => {
    const employersName = Array.from(document.querySelectorAll('[data-js="getEmployerName"]')).map(employer => employer.textContent.trim());
    const employersCnpj = Array.from(document.querySelectorAll('[data-js="getEmployerCnpj"]')).map(employer => employer.textContent);
    const employersZipcode = Array.from(document.querySelectorAll('[data-js="getEmployerAddressZipcode"]')).map(employer => employer.textContent);
    const employersAddress = Array.from(document.querySelectorAll('[data-js="getEmployerAddress"]')).map(employer => employer.textContent.trim());
    const employersNumber = Array.from(document.querySelectorAll('[data-js="getEmployerAddressNumber"]')).map(employer => employer.textContent);
    const employersDistrict = Array.from(document.querySelectorAll('[data-js="getEmployerAddressDistrict"]')).map(employer => employer.textContent);
    const employersCity = Array.from(document.querySelectorAll('[data-js="getEmployerAddressCity"]')).map(employer => employer.textContent);
    const employersState = Array.from(document.querySelectorAll('[data-js="getEmployerAddressState"]')).map(employer => employer.textContent);
    
    const newEmployers = employersName.reduce((acc, { name }, index) => {
        const clientsObject = {};
        
        clientsObject['name'] = clientsObject['name'] = name || employersName[index];
        clientsObject['cnpj'] = clientsObject['cnpj'] = employersCnpj[index] || employersCnpj[index];
        clientsObject['zipcode'] = clientsObject['zipcode'] = employersZipcode[index] || employersZipcode[index];
        clientsObject['address'] = clientsObject['address'] = employersAddress[index] || employersAddress[index];
        clientsObject['number'] = clientsObject['number'] = employersNumber[index] || employersNumber[index];
        clientsObject['district'] = clientsObject['district'] = employersDistrict[index] || employersDistrict[index];
        clientsObject['city'] = clientsObject['city'] = employersCity[index] || employersCity[index];
        clientsObject['state'] = clientsObject['state'] = employersState[index] || employersState[index];

        acc.push(clientsObject);
        return acc;
    }, []);
    return newEmployers;
} */

//Exibir ou ocultar informações sobre mensalidade
const showOrHide = () => 
    document.querySelector('[data-js="monthly"]').classList.toggle('show');

//Gerar contrato com os dados informados
const setContractText = (selector, value) =>
    document.querySelectorAll(`[data-js="${selector}"]`).forEach(item => item.textContent = value);

const getFilteredEmployer = cnpj => {
    const getEmployerCnpjValue = cnpj;
    return clients.filter(client => client.cnpj === getEmployerCnpjValue)[0];
}

const generateContract = () => {
    const employerCnpjValue = document.querySelector('#getEmployerCnpj').value;
    const employerData = getFilteredEmployer(employerCnpjValue);
    const currentDate = getCurrentDate();
    const planTypeValue = document.querySelector('#getPlanType').value;
    const systemVersionValue = document.querySelector('#getSystemVersion').value;
    const priceValue = document.querySelector('#getPrice').value;
    const amountEmployeesValue = document.querySelector('#getAmountEmployees').value;
    const amountCnpjValue = document.querySelector('#getAmountCnpj').value;
    const amountEquipValue = document.querySelector('#getAmountEquip').value;

    if (employerData) {
        setContractText('setPlanType', planTypeValue);
        setContractText('setSystemVersion', systemVersionValue);
        setContractText('setPrice', `R$ ${priceValue}`);
        setContractText('setAmountEmployees', amountEmployeesValue);
        setContractText('setAmountCnpj', amountCnpjValue);
        setContractText('setAmountEquip', amountEquipValue);
        setContractText('setEmployerCnpj', employerCnpjValue);
        setContractText('setEmployerName', employerData.name);
        setContractText('setEmployerAddress', employerData.address);
        setContractText('setEmployerAddressZipcode', employerData.zipcode);
        setContractText('setEmployerAddressNumber', employerData.number);
        setContractText('setEmployerAddressDistrict', employerData.district);
        setContractText('setEmployerAddressCity', employerData.city);
        setContractText('setEmployerAddressState', employerData.state);
        setContractText('setCurrentDate', currentDate);
        showEquipmentText();

        return;
    }

    alert(`CNPJ ${employerCnpjValue} Não localizado.`);
}

const changeCopyButtonProp = newEmployerCopyButton => {
    newEmployerCopyButton.classList.toggle('btn-secondary');
    newEmployerCopyButton.classList.toggle('btn-success');
    const hasBeenCopied =
        newEmployerCopyButton.classList.contains('btn-success') ? 'Copiado' : 'Copiar Dados';
    newEmployerCopyButton.textContent = hasBeenCopied;
}

// Gerar novo cadastro de cliente
const generateNewEmployer = e => {
    e.preventDefault();
    const hasEmployerExists = getFilteredEmployer(e.target.newEmployerCnpj.value);

    if (hasEmployerExists) {
        alert(`${hasEmployerExists.name} já existe`);
        return;
    }

    if (newEmployerCopyButton.textContent === 'Copiado') {
        changeCopyButtonProp(newEmployerCopyButton);
        return;
    }

    newEmployerTextarea.textContent =
    `{
        name: "${e.target.newEmployerName.value}",
        cnpj: "${e.target.newEmployerCnpj.value}",
        zipcode: "${e.target.newEmployerAddressZipcode.value}",
        address: "${e.target.newEmployerAddress.value}",
        number: "${e.target.newEmployerAddressNumber.value}",
        district: "${e.target.newEmployerAddressDistrict.value}",
        city: "${e.target.newEmployerAddressCity.value}",
        state: "${e.target.newEmployerAddressState.value}"
    },`;
}

const copyNewEmployer = () => {
    if (newEmployerCopyButton.textContent === 'Copiar Dados') {
        navigator.clipboard.writeText(newEmployerTextarea.textContent);
        changeCopyButtonProp(newEmployerCopyButton);
    }
}

//Listeners de eventos
getEmployerCnpj.addEventListener('input', cnpjMask);
newEmployerCnpj.addEventListener('input', cnpjMask);
newEmployerAddressZipcode.addEventListener('input', cepMask);
newEmployerForm.addEventListener('submit', generateNewEmployer);
generateContractButton.addEventListener('click', generateContract);
showHideButton.addEventListener('click', showHideNewEmployer);
newEmployerCopyButton.addEventListener('click', copyNewEmployer);