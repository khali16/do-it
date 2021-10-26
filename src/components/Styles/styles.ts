import { red } from "@material-ui/core/colors";
import { makeStyles, createStyles, createTheme } from "@material-ui/core/styles";

type Props = {
  priority: string
}

const useStyles = makeStyles<Props>(theme => createStyles({
  menuPaper: {
    backgroundColor: "#CFFBE2",
  },
  navigationMenu: {
backgroundColor: "#F1FDEB"
  },
  menuIcon: {
    fill: "#2A895E"
  },
  menuButton: {
    marginLeft: "auto", color: "#2A895E"
  },
  todosBox: {
    width: "50%",
    height: "auto",
    justifyContent: "center",
    margin: "auto",
    marginTop: "5%",
    alignItems: "center",
    padding: "1",
    backgroundColor: "#64BF91"
  },
  newTodo: {
width: "75%",
marginLeft: "11%",
marginTop: "5px"
  },
  newTodoLabel: {
    marginLeft:"11%",
    marginTop: "10px"
  },
  selectPaper:{
paper: "#CFFBE2"
  },
  datePicker:{
    marginTop: "15px",
    marginLeft:"31%"
  },
  newTodoButton: {
    width: "75%",
    marginLeft: "11%",
    marginTop: "20px",
    backgroundColor: "#F1FDEB"
  },
  singleTodo: {
    // TODO find right type
    backgroundColor: ({priority}:any) => { return priority === "high" ? "#238389" : "#64BF91"},
    marginTop: "5px",
    border: "1px solid grey",
  },
  completedTodos: {
    marginTop: "5px", border: "1px solid grey"
  },
  todosList: {
    width: "50%",
    margin: "auto",
    marginTop: "5%",
  },
})
);

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderWidth: 1,
          borderColor: "#2A895E"
        },
        "&$focused $notchedOutline": {
          borderColor: "#2A895E",
          borderWidth: 2,
        },
        "&$hover $notchedOutline": {
          borderColor: "#2A895E",
          borderWidth: 2
        }
      },
      notchedOutline: {
        borderColor: "#2A895E",
      },
    },
  }});

export { useStyles, theme };
