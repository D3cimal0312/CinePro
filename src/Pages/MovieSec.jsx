
import "./Land.css";
import Card from "../components/Card";
import Header from "../components/Header";
const MovieSec = () => {

  return (
    <div className="px-12 bg-[#0b0e12]">
      <div className="py-18  border-b-2 border-stone">

        <Header smallstr={"Right Now"} head1={"Highly"} head2={"Rated"}/>
          <Card minimum_rating={9} limit={10} />

      </div>

      <div className="py-18 border-b-2 border-stone">

        <Header smallstr={"Explore"} head1={"New"} head2={"Release"}/>
          <Card limit={5} sort_by={"year"} order_by = "desc"/>
       
      </div>
            <div className="py-18">
        <Header smallstr={"Recent"} head1={"Watch"} head2={"3D'"}/> 
          <Card limit={5} quality={"3D"} sort_by={"year"} order_by = "desc"/>
          
      </div>

    </div>
  );
};

export default MovieSec;
