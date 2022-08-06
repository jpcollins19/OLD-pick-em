// const Row_Cont = ({ teamNum, changeHandler }) => {
//   let lockedVal = false;

//   return (
//     <div className="row-cont">
//       <div className="name-cont">
//         <input
//           className="center bold"
//           onChange={(ev) => changeHandler('name', ev.target.value, teamNum)}
//         />
//       </div>
//       <div className="spread-cont">
//         <input
//           className="center bold"
//           onChange={(ev) =>
//             changeHandler('spread', Number(ev.target.value), teamNum)
//           }
//         />
//       </div>
//       <div className="locked-cont">
//         <input
//           type="checkbox"
//           onChange={(ev) => {
//             lockedVal = !lockedVal;
//             changeHandler('locked', lockedVal, teamNum);
//           }}
//         />
//       </div>
//       <div className="rank-cont">
//         <input
//           className="center bold"
//           onChange={(ev) =>
//             changeHandler('rank', Number(ev.target.value), teamNum)
//           }
//         />
//       </div>
//     </div>
//   );
// };

// export default connect(null)(Row_Cont);
