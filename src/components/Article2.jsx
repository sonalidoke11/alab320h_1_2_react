import image2 from "/src/images/blog-image-2.jpg"


function Article2(){
    //const imgURL = "../src/images/blog-image-2.jpg";
    const alt = "Vintage";
    return(
        <article>
            <h3>11/11/20</h3>
            <h2 class="blog-post-title">Vintage in Vogue</h2>
            <img src={image2} alt={alt} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum debitis vitae perspiciatis consectetur repellendus illum? Eaque exercitationem, ad facilis architecto sit nostrum, eos fuga nam sequi, reiciendis temporibus quas recusandae.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum debitis vitae perspiciatis consectetur repellendus illum? Eaque exercitationem, ad facilis architecto sit nostrum, eos fuga nam sequi, reiciendis temporibus quas recusandae.</p>
            <a href="#" class="continues">continues...</a>
        </article>
    )
}

export default Article2