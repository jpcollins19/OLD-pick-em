import Button from "../Misc/Button";
import Header from "./Header";
import "./Spread.css";

const Spread_Page = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name1: '',
  //     spread1: null,
  //     rank1: null,
  //     locked1: false,
  //     name2: '',
  //     spread2: null,
  //     rank2: null,
  //     locked2: false,
  //     name3: '',
  //     spread3: null,
  //     rank3: null,
  //     locked3: false,
  //     name4: '',
  //     spread4: null,
  //     rank4: null,
  //     locked4: false,
  //     name5: '',
  //     spread5: null,
  //     rank5: null,
  //     locked5: false,
  //     name6: '',
  //     spread6: null,
  //     rank6: null,
  //     locked6: false,
  //     name7: '',
  //     spread7: null,
  //     rank7: null,
  //     locked7: false,
  //     name8: '',
  //     spread8: null,
  //     rank8: null,
  //     locked8: false,
  //     name9: '',
  //     spread9: null,
  //     rank9: null,
  //     locked9: false,
  //     name10: '',
  //     spread10: null,
  //     rank10: null,
  //     locked10: false,
  //     name12: '',
  //     spread12: null,
  //     rank12: null,
  //     locked12: false,
  //     name13: '',
  //     spread13: null,
  //     rank13: null,
  //     locked13: false,
  //     name14: '',
  //     spread14: null,
  //     rank14: null,
  //     locked14: false,
  //     name15: '',
  //     spread15: null,
  //     rank15: null,
  //     locked15: false,
  //     name16: '',
  //     spread16: null,
  //     rank16: null,
  //     locked16: false,
  //     error: '',
  //   };
  // }

  {
  }

  // changeHandler = (field, val, team) => {
  //   if (field === "name") {
  //     switch (team) {
  //       case 1:
  //         this.setState({ name1: val });
  //         break;
  //       case 2:
  //         this.setState({ name2: val });
  //         break;
  //       case 3:
  //         this.setState({ name3: val });
  //         break;
  //       case 4:
  //         this.setState({ name4: val });
  //         break;
  //       case 5:
  //         this.setState({ name5: val });
  //         break;
  //       case 6:
  //         this.setState({ name6: val });
  //         break;
  //       case 7:
  //         this.setState({ name7: val });
  //         break;
  //       case 8:
  //         this.setState({ name8: val });
  //         break;
  //       case 9:
  //         this.setState({ name9: val });
  //         break;
  //       case 10:
  //         this.setState({ name10: val });
  //         break;
  //       case 11:
  //         this.setState({ name11: val });
  //         break;
  //       case 12:
  //         this.setState({ name12: val });
  //         break;
  //       case 13:
  //         this.setState({ name13: val });
  //         break;
  //       case 14:
  //         this.setState({ name14: val });
  //         break;
  //       case 15:
  //         this.setState({ name15: val });
  //         break;
  //       case 16:
  //         this.setState({ name16: val });
  //         break;
  //       default:
  //         throw "error";
  //     }
  //   } else if (field === "spread") {
  //     switch (team) {
  //       case 1:
  //         this.setState({ spread1: val });
  //         break;
  //       case 2:
  //         this.setState({ spread2: val });
  //         break;
  //       case 3:
  //         this.setState({ spread3: val });
  //         break;
  //       case 4:
  //         this.setState({ spread4: val });
  //         break;
  //       case 5:
  //         this.setState({ spread5: val });
  //         break;
  //       case 6:
  //         this.setState({ spread6: val });
  //         break;
  //       case 7:
  //         this.setState({ spread7: val });
  //         break;
  //       case 8:
  //         this.setState({ spread8: val });
  //         break;
  //       case 9:
  //         this.setState({ spread9: val });
  //         break;
  //       case 10:
  //         this.setState({ spread10: val });
  //         break;
  //       case 11:
  //         this.setState({ spread11: val });
  //         break;
  //       case 12:
  //         this.setState({ spread12: val });
  //         break;
  //       case 13:
  //         this.setState({ spread13: val });
  //         break;
  //       case 14:
  //         this.setState({ spread14: val });
  //         break;
  //       case 15:
  //         this.setState({ spread15: val });
  //         break;
  //       case 16:
  //         this.setState({ spread16: val });
  //         break;
  //       default:
  //         throw "error";
  //     }
  //   } else if (field === "locked") {
  //     switch (team) {
  //       case 1:
  //         this.setState({ locked1: val });
  //         break;
  //       case 2:
  //         this.setState({ locked2: val });
  //         break;
  //       case 3:
  //         this.setState({ locked3: val });
  //         break;
  //       case 4:
  //         this.setState({ locked4: val });
  //         break;
  //       case 5:
  //         this.setState({ locked5: val });
  //         break;
  //       case 6:
  //         this.setState({ locked6: val });
  //         break;
  //       case 7:
  //         this.setState({ locked7: val });
  //         break;
  //       case 8:
  //         this.setState({ locked8: val });
  //         break;
  //       case 9:
  //         this.setState({ locked9: val });
  //         break;
  //       case 10:
  //         this.setState({ locked10: val });
  //         break;
  //       case 11:
  //         this.setState({ locked11: val });
  //         break;
  //       case 12:
  //         this.setState({ locked12: val });
  //         break;
  //       case 13:
  //         this.setState({ locked13: val });
  //         break;
  //       case 14:
  //         this.setState({ locked14: val });
  //         break;
  //       case 15:
  //         this.setState({ locked15: val });
  //         break;
  //       case 16:
  //         this.setState({ locked16: val });
  //         break;
  //       default:
  //         throw "error";
  //     }
  //   } else if (field === "rank") {
  //     switch (team) {
  //       case 1:
  //         this.setState({ rank1: val });
  //         break;
  //       case 2:
  //         this.setState({ rank2: val });
  //         break;
  //       case 3:
  //         this.setState({ rank3: val });
  //         break;
  //       case 4:
  //         this.setState({ rank4: val });
  //         break;
  //       case 5:
  //         this.setState({ rank5: val });
  //         break;
  //       case 6:
  //         this.setState({ rank6: val });
  //         break;
  //       case 7:
  //         this.setState({ rank7: val });
  //         break;
  //       case 8:
  //         this.setState({ rank8: val });
  //         break;
  //       case 9:
  //         this.setState({ rank9: val });
  //         break;
  //       case 10:
  //         this.setState({ rank10: val });
  //         break;
  //       case 11:
  //         this.setState({ rank11: val });
  //         break;
  //       case 12:
  //         this.setState({ rank12: val });
  //         break;
  //       case 13:
  //         this.setState({ rank13: val });
  //         break;
  //       case 14:
  //         this.setState({ rank14: val });
  //         break;
  //       case 15:
  //         this.setState({ rank15: val });
  //         break;
  //       case 16:
  //         this.setState({ rank16: val });
  //         break;
  //       default:
  //         throw "error";
  //     }
  //   }
  // };

  {
  }

  // handleSubmit = async (evt) => {
  //   evt.preventDefault();
  //   try {
  //     const {
  //       name1,
  //       spread1,
  //       rank1,
  //       locked1,
  //       name2,
  //       spread2,
  //       rank2,
  //       locked2,
  //       name3,
  //       spread3,
  //       rank3,
  //       locked3,
  //       name4,
  //       spread4,
  //       rank4,
  //       locked4,
  //       name5,
  //       spread5,
  //       rank5,
  //       locked5,
  //       name6,
  //       spread6,
  //       rank6,
  //       locked6,
  //       name7,
  //       spread7,
  //       rank7,
  //       locked7,
  //       name8,
  //       spread8,
  //       rank8,
  //       locked8,
  //       name9,
  //       spread9,
  //       rank9,
  //       locked9,
  //       name10,
  //       spread10,
  //       rank10,
  //       locked10,
  //       name11,
  //       spread11,
  //       rank11,
  //       locked11,
  //       name12,
  //       spread12,
  //       rank12,
  //       locked12,
  //       name13,
  //       spread13,
  //       rank13,
  //       locked13,
  //       name14,
  //       spread14,
  //       rank14,
  //       locked14,
  //       name15,
  //       spread15,
  //       rank15,
  //       locked15,
  //       name16,
  //       spread16,
  //       rank16,
  //       locked16,
  //     } = this.state;

  //     const team1 = {
  //       name: name1,
  //       spread: spread1,
  //       rank: rank1,
  //       locked: locked1,
  //     };
  //     const team2 = {
  //       name: name2,
  //       spread: spread2,
  //       rank: rank2,
  //       locked: locked2,
  //     };
  //     const team3 = {
  //       name: name3,
  //       spread: spread3,
  //       rank: rank3,
  //       locked: locked3,
  //     };
  //     const team4 = {
  //       name: name4,
  //       spread: spread4,
  //       rank: rank4,
  //       locked: locked4,
  //     };
  //     const team5 = {
  //       name: name5,
  //       spread: spread5,
  //       rank: rank5,
  //       locked: locked5,
  //     };
  //     const team6 = {
  //       name: name6,
  //       spread: spread6,
  //       rank: rank6,
  //       locked: locked6,
  //     };
  //     const team7 = {
  //       name: name7,
  //       spread: spread7,
  //       rank: rank7,
  //       locked: locked7,
  //     };
  //     const team8 = {
  //       name: name8,
  //       spread: spread8,
  //       rank: rank8,
  //       locked: locked8,
  //     };
  //     const team9 = {
  //       name: name9,
  //       spread: spread9,
  //       rank: rank9,
  //       locked: locked9,
  //     };
  //     const team10 = {
  //       name: name10,
  //       spread: spread10,
  //       rank: rank10,
  //       locked: locked10,
  //     };
  //     const team11 = {
  //       name: name11,
  //       spread: spread11,
  //       rank: rank11,
  //       locked: locked11,
  //     };
  //     const team12 = {
  //       name: name12,
  //       spread: spread12,
  //       rank: rank12,
  //       locked: locked12,
  //     };
  //     const team13 = {
  //       name: name13,
  //       spread: spread13,
  //       rank: rank13,
  //       locked: locked13,
  //     };
  //     const team14 = {
  //       name: name14,
  //       spread: spread14,
  //       rank: rank14,
  //       locked: locked14,
  //     };
  //     const team15 = {
  //       name: name15,
  //       spread: spread15,
  //       rank: rank15,
  //       locked: locked15,
  //     };
  //     const team16 = {
  //       name: name16,
  //       spread: spread16,
  //       rank: rank16,
  //       locked: locked16,
  //     };

  //     team1.name && (await this.props.addATeam(team1));
  //     team2.name && (await this.props.addATeam(team2));
  //     team3.name && (await this.props.addATeam(team3));
  //     team4.name && (await this.props.addATeam(team4));
  //     team5.name && (await this.props.addATeam(team5));
  //     team6.name && (await this.props.addATeam(team6));
  //     team7.name && (await this.props.addATeam(team7));
  //     team8.name && (await this.props.addATeam(team8));
  //     team9.name && (await this.props.addATeam(team9));
  //     team10.name && (await this.props.addATeam(team10));
  //     team11.name && (await this.props.addATeam(team11));
  //     team12.name && (await this.props.addATeam(team12));
  //     team13.name && (await this.props.addATeam(team13));
  //     team14.name && (await this.props.addATeam(team14));
  //     team15.name && (await this.props.addATeam(team15));
  //     team16.name && (await this.props.addATeam(team16));
  //   } catch (err) {
  //     console.log(err);
  //     this.setState({ error: err.response });
  //   }
  // };

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17];

  return (
    // <form className="left box" onSubmit={handleSubmit}>
    <form className="left box">
      <div className="header">
        <h1 className="white-text">Spread Info</h1>

        <Button text="Submit" />
      </div>
      <div className="full-spread-info-cont">
        <Header />

        <div>
          {/* {nums.map((num) => (
            <Row_Cont teamNum={num} changeHandler={changeHandler} />
          ))} */}
        </div>
      </div>
    </form>
  );
};

export default Spread_Page;
