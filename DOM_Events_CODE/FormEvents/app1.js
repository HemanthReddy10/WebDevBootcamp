// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ulist=document.querySelector('#list');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const productName=form.elements.product;
    const productQty=form.elements.qty;
    addProduct(productName.value,productQty.value);
    productName.value="";
    productQty.value="";
});

const addProduct=(name,qty)=>{
    const newProd=document.createElement("li");
    newProd.append(`${qty} ${name}`);
    ulist.append(newProd);
};