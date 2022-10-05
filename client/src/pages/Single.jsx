import React from "react";
import { Link } from "react-router-dom";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            srcset=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          provident et, quo unde aspernatur eius nam pariatur odit quisquam
          doloremque? Culpa magni nulla itaque cum nisi unde quibusdam a
          impedit?
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          minus illo, veniam mollitia in dolorum temporibus! Dolore aut esse
          quos atque et, pariatur soluta corrupti ad commodi ullam voluptatem
          delectus consequatur exercitationem quae recusandae quas tempora, vero
          nisi quidem totam iste dignissimos. Tempore, quidem corporis?
          Consectetur dolores numquam deleniti explicabo. Illum, hic perferendis
          sit, facilis sed reiciendis non totam atque aut assumenda voluptas
          nostrum rerum? Rerum corporis temporibus esse amet sapiente in at
          accusantium laudantium fugiat a maiores iure, ipsam, voluptatem
          officia harum, labore illum fugit assumenda deleniti molestiae? Maxime
          voluptas eum temporibus! Vero doloribus beatae nam amet perspiciatis
          labore quasi laudantium molestiae qui, porro recusandae adipisci
          blanditiis consequuntur placeat nostrum! Ut veniam quaerat tempore,
          velit perferendis earum ipsum qui natus eveniet accusamus facilis,
          dolor dignissimos beatae error temporibus incidunt fugiat nostrum
          corporis unde. Ullam cumque, labore ratione assumenda saepe aliquid,
          illum maxime repudiandae reiciendis molestiae possimus facilis tenetur
          dignissimos modi doloremque qui quam eum similique tempora hic! Unde
          quibusdam neque optio harum illo ipsa, tenetur qui sequi, repudiandae
          magni commodi quod quae voluptates in, quisquam magnam vero natus. At,
          asperiores explicabo quisquam sunt, ipsam recusandae nulla numquam
          obcaecati dolorem ut nihil, minus eum officiis! A, voluptatem quos
          consequatur quod, nemo quo asperiores perspiciatis placeat sed nisi
          inventore vel delectus labore omnis quae, quaerat odio sunt ea? Modi
          vel ducimus aspernatur, reiciendis unde accusamus id quam? Nobis
          dolorem atque odit, quia maiores tempora placeat dicta iure facere
          possimus reprehenderit corrupti quae autem praesentium nulla sed
          magnam nesciunt, eaque illo! Eum perferendis numquam eveniet
          praesentium officia dolorem doloremque consequuntur deleniti omnis
          veritatis architecto porro itaque sapiente, dolores corporis
          asperiores, at facere non ad autem quae inventore! Blanditiis dolores
          libero vel! Perferendis maxime ipsam, suscipit fugiat nam labore
          delectus. Consectetur eveniet omnis pariatur ut, nostrum, iure fugiat
          consequuntur saepe incidunt magni veniam?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
