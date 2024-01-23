import Navbar from "../components/Navbar";
import classes from '../modules/Homepage.module.css';

function Homepage() {
  return (
    <div className={classes.homepageContainer}>
      <Navbar />
      <p>Have you been looking for you favorite one stop shop!? Then look no further! We have everything you need from clothing to jewelry to electronics! Pop over to our shop page and get started!</p>
    </div>
  )
}

export default Homepage;