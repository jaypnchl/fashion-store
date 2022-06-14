import React from "react";
import MenuItem from "./MenuItem";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "lg",
          id: 4,
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "lg",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className=" grid grid-rows lg:grid-cols-3 gap-6">
        {this.state.sections.map(({ id, title }) => (
          <MenuItem key={id} title={title} />
        ))}
      </div>
    );
  }
}

export default Directory;
