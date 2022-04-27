import classes from './Home.css';
import {Typography, Grid} from '@material-ui/core';
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FeaturedWorkCard from '../../components/FeaturedWorkCard/FeaturedWorkCard'
import FeaturedBlogItem from "../../components/FeaturedBlogItem/FeaturedBlogItem";
import AboutMeDialog from "../../components/AboutMe/AboutMeDialog";

const Home = (props) => {
    const google = "https://firebasestorage.googleapis.com/v0/b/web-app-d1952.appspot.com/o/portfolio-imgs%2FGC_NEXT-Blog-Header_V1.max-2200x2200.png?alt=media&token=d7991ec2-f82d-47bb-946c-1dbdd14d4ec1";
    const blogArchive = "https://firebasestorage.googleapis.com/v0/b/web-app-d1952.appspot.com/o/blog-imgs-min%2Fday_3_header.jpg?alt=media&token=3bf4aff2-e001-4359-8fa1-b89f94038bc6";
    return (
        <div>
            <div className={classes.Hello}>
                <div className={classes.HelloContainer}>
                    <Typography variant="h2" color="secondary"><b>Hey, I'm Kenny.</b></Typography>
                    <Typography variant="body2" color="secondary" style={{marginTop: 16}}><i>Mobile Developer • Content
                        Creator</i></Typography>
                    <div className={classes.AboutButton}><AboutMeDialog/></div>
                    <div className={classes.Socials}>
                        <a href="https://www.github.com/kennygunderman"><GitHubIcon fontSize="large"
                                                                                    className={classes.SocialIcon}/></a>
                        <a href="https://www.youtube.com/kennygunderman"><YouTubeIcon fontSize="large"
                                                                                      className={classes.SocialIcon}/></a>
                        <a href="https://www.linkedin.com/in/kenny-gunderman-0406a8119/"><LinkedInIcon fontSize="large"
                                                                                                       className={classes.SocialIcon}/></a>
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.ContentSection}>
                    <div className={classes.ContentSectionAlpha}>
                        <div className={classes.ContentSectionGradientTop}/>
                        <div className={classes.ContentSectionContainer}>
                            <Typography variant="h4" color="secondary" style={{marginBottom: 24}}>MY
                                WORK</Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={6}>
                                    <FeaturedWorkCard image={google} title={"Purina"}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FeaturedWorkCard image={google} title={"Google"}/>
                                </Grid>
                                <Grid item xs={12} md={12}>
                                    <FeaturedWorkCard image={google} title={"TWO MEN AND A TRUCK"}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.ContentSectionGradientBottom}/>
                    </div>
                </div>
                <div className={classes.ContentSection}>
                    <div className={classes.ContentSectionAlpha}>
                        <div className={classes.ContentSectionContainer}>
                            <Typography variant="h4" color="secondary"
                                        style={{paddingTop: 48, marginBottom: 24}}>BLOG ARCHIVE</Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={12}>
                                    <FeaturedBlogItem item={{
                                        date: new Date(),
                                        title: "My experience learning React over 7 days.",
                                        summary: "In this blog archive, I spent 7 days learning React to see how far I could get in that time frame.",
                                        image: blogArchive
                                    }} clickHandler={() => props.history.push('/Blog')}/>
                                </Grid>
                            </Grid>
                        </div>
                        <div className={classes.ContentSectionGradientBottom}/>
                    </div>
                </div>
            </div>
            <div className={classes.Footer}>
                <Typography variant="body1" color="secondary">© Kenny Gunderman®</Typography>
            </div>
        </div>);
}

export default Home;