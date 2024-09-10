

// function ArticleItem(props){
//     return(
//         <article>
//             <h3>11/12/20</h3>
//             <h2 class="blog-post-title">{props.title}</h2>
//             <img src={props.imageUrl} alt={props.title} />
//             <p>{props.content}</p>
//             <a href="#" class="continues">continues...</a>
//         </article>
//     )
// }

// export default ArticleItem

/* eslint-disable react/prop-types */

function ArticleItem(props) {
    return (
      <article>
        <h4>{props.publishedDate}</h4>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
        <div>
          <img src={props.imgURL} alt={props.title} />
        </div>
        <p>{props.content}</p>
        <a href="#" class="continues">continues...</a>
      </article>
    );
  }
  
  export default ArticleItem;