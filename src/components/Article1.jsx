import image1 from "/src/images/blog-image-1.jpg"

function Article1(){
   // const imgURL = "../src/images/blog-image-1.jpg";
    const alt = "Brooklyn";
    return(
        <article>
            <h3>11/12/20</h3>
            <h2 class="blog-post-title">On the Street in Brooklyn</h2>
            <img src={image1} alt={alt} />
            <p>Cray culpa stumptown, flexitarian ex Odd Future do fugiat Wes Anderson proident 3 wolf moon officia bitters small batch. Et consequat do, nulla you probably haven’t heard of them High Life scenester. Vinyl fugiat High Life, kogi do VHS in aliqua lo-fi leggings gentrify Neutra tumblr. Odio vegan PBR, Marfa forage blue bottle try-hard readymade meggings retro delectus Echo Park. Ugh consectetur farm-to-table forage, laboris blue bottle McSweeney’s tattooed excepteur yr. Magna ut Schlitz flexitarian, vinyl craft beer proident yr forage 8-bit ethical sustainable placeat retro. Officia pickled beard, adipisicing gluten-free sint craft beer quis thundercats id 3 wolf moon fashion axe.</p>
            <a href="#" class="continues">continues...</a>
        </article>
    )
}

export default Article1