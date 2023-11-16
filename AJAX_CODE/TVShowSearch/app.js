const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}


// practise:
const form=document.querySelector("#searchForm");
form.addEventListener('submit',async function(e){
      e.preventDefault();
      const searchtext=form.elements.query.value;
      const config = { params: { q: searchTerm } }
      const res=await axios.get(`http://api.tvmaze.com/search/shows`,params);
      const imag=document.createElement('img');
      imag.src=res.data[0].show.image.medium;
      document.body.append(imag);
      form.elements.query.value = '';
})
