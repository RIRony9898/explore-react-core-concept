export default function Singers({singer}) {
    console.log(singer)
   const {name, age}=singer;
  return (
    <div className = 'singers'>
      <h3>Singer: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}
