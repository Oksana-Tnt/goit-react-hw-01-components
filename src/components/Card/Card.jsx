import { Head } from "components/Head/Head";
import data from "../../data.json";
import css from'./Card.module.css';
import clsx from 'clsx';
import { Container, Photo } from "./Card.styled";



//----------------------------module-----------------------------------------
// export const Card = ({isOnline, isOffline}) =>{
//     return data.map((photo) => {
//       return (
//       <div key = {photo.id} 
//       // className={isOnline ? 
//       //   `${css.main} ${css.red}` 
//       // : `${css.main} ${css.blue}`}

//       // className={clsx(css.main, isOnline && css.red, !isOnline && css.blue)}

//        className={clsx(css.main, {
//         [css.red] : isOnline,
//         [css.blue] : isOffline
//        })}

//       >
//       <img src={photo.url} className={css.photo} alt={photo.title}/>
//       <div className="card-body">
//       <h5 className="card-title">{photo.title}</h5>
//       <Head id="123" clas="card-title">
//         I am children
//         <div>dgdfgfd</div>
//         <p>hgfhgf</p>      
//       </Head>
//       <a href="http" className="btn btn-primary">Go somewhere</a>
//       </div>
//     </div>)
//     }
//     )
//     }

//------------------------------css in js-----------------------------------------------

export const Card = ({isOnline}) =>{
  return data.map((photo) => {
    return (
    <Container key = {photo.id} isHide = {isOnline} >    
 
    <Photo src={photo.url} className={css.photo} alt={photo.title}/>
    <div className="card-body">
    <h5 className="card-title">{photo.title}</h5>
    <Head id="123" clas="card-title">
      I am children
      <div>dgdfgfd</div>
      <p>hgfhgf</p>      
    </Head>
    <a href="http" className="btn btn-primary">Go somewhere</a>
    </div>
  </Container>)
  }
  )
  }