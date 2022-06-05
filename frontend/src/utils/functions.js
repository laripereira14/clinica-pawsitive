export const formatPhone = phone => phone.replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})$/, '($1) $2 $3-$4');

export const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateCarteirinha = (allValues) => {
   if (allValues) {
        const values = allValues.map(el => Number(el.carteirinha));
        const generatedNumber = generateRandom(100,500000);
        if (values.includes(generatedNumber)) {
            generateCarteirinha(allValues);
        } else {
            return generatedNumber;
        }
   } else {
        const generatedNumber = generateRandom(100,500000);
        return generatedNumber;
   }
}

export const isNumberKey = (e) => {
    var charCode = (e.which) ? e.which : e.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
    return true;
}