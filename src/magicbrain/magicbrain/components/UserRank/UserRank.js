import React from "react";
import 'tachyons';

const UserRank = ({posted, name}) => {

		return (
			<div>
				<div className="white f3">
				<p>{`${name}, tus imagenes posteadas son...`}</p>
				</div>
				<div className="white f1">
 				<p>{posted}</p>
				</div>
			</div>	
		);
}

export default UserRank;