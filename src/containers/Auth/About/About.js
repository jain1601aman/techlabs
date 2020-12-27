import React from "react";
import cx from "clsx";
import logo from "../../../assets/images/favicon.png";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import BrandCardHeader from "@mui-treasury/components/cardHeader/brand";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useN03TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n03";
import { useLightTopShadowStyles } from "@mui-treasury/styles/shadow/lightTop";
import { Box, Avatar, Chip } from "@material-ui/core";

import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    borderRadius: 20,
  },
  content: {
    padding: 24,
  },
  background: {
    background: "linear-gradient(120deg, #2980b9, #8e44ad)",
  },
  chip: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const About = React.memo(function ProjectCard() {
  const styles = useN03TextInfoContentStyles();
  const shadowStyles = useLightTopShadowStyles();
  const cardStyles = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight={"92.2vh"}
      className={cardStyles.background}
    >
      <Box m={3}>
        <Card className={cx(cardStyles.root, shadowStyles.root)}>
          <BrandCardHeader
            image={
              logo
            }
            extra={""}
          />
          <CardContent className={cardStyles.content}>
            <TextInfoContent
              classes={styles}
              overline={"Tech-labs"}
              heading={"About"}
              body={
                "Description Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim laoreet dolore magnaaliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrudexerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacommodo consequat consectetuer adipiscing elit, sed diam nonummy nibheuismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Utwisi enim ad minim veniam, quis nostrud exerci"
              }
            />
            <TextInfoContent
              classes={styles}
              body={
                ""
              }
            />
            
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
});

export default About;

const librariesList = [
  {
    avatar: "R",
    name: "ReactJS",
    link: "https://reactjs.org/",
  },
  {
    avatar: "C",
    name: "Create React App",
    link: "https://github.com/facebook/create-react-app",
  },
  {
    avatar: "M",
    name: "MATERIAL-UI",
    link: "https://material-ui.com/",
  },
  {
    avatar: "T",
    name: "Mui-Treasury",
    link: "https://mui-treasury.com/",
  },
  {
    avatar: "N",
    name: "Notistack",
    link: "https://iamhosseindhv.com/notistack/demos",
  },
  {
    avatar: "D",
    name: "Material-UI-dropzone",
    link: "https://yuvaleros.github.io/material-ui-dropzone/",
  },
  {
    avatar: "F",
    name: "Formik",
    link: "https://jaredpalmer.com/formik",
  },
  {
    avatar: "F",
    name: "Formik Material-UI",
    link: "https://stackworx.github.io/formik-material-ui/",
  },
  {
    avatar: "W",
    name: "Wertarbyte Material-UI Components",
    link: "https://mui.wertarbyte.com/",
  },
  {
    avatar: "C",
    name: "React Material UI Carousel",
    link: "https://github.com/Learus/react-material-ui-carousel",
  },
  {
    avatar: "C",
    name: "React CountUp",
    link: "https://github.com/glennreyes/react-countup",
  },
  {
    avatar: "R",
    name: "Redux",
    link: "https://redux.js.org/",
  },
  {
    avatar: "R",
    name: "REACT ROUTER",
    link: "https://reacttraining.com/react-router/",
  },
];
