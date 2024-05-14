import { Avatar, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { timeAgo } from "../../utils/timeAgo";
import useUserProfileStore from "../../store/userProfileStore";

const Caption = ({ post }) => {
	const userProfile = useUserProfileStore((state) => state.userProfile);

	return (
		<Flex gap={4}>
			<Link to={`/${userProfile.username}`}>
				<Avatar src={userProfile.profilePicURL} size={"sm"} />
			</Link>
			<Flex direction={"column"}>
				<Flex gap={2} alignItems={"center"}>
					<Link to={`/${userProfile.username}`}>
						<Text fontWeight={"bold"} fontSize={12}>
							{userProfile.username}
						</Text>
					</Link>
					<Text fontSize={14}>{post.caption}</Text>
				</Flex>
				<Text fontSize={12} color={"gray"}>
					{timeAgo(post.createdAt)}
				</Text>
			</Flex>
		</Flex>
	);
};

export default Caption;
//latest working code
// import { Avatar, Flex, Text } from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// const Caption = () => {

// 	return (
// 		<Flex gap={4}>
// 			<Link >
// 				<Avatar src="profile_pic.png"size={"sm"} />
// 			</Link>
// 			<Flex direction={"column"}>
// 				<Flex gap={2} alignItems={"center"}>
// 					<Link  >
// 						<Text fontWeight={"bold"} fontSize={12}>
//                              Team KN
// 						</Text>
// 					</Link>
// 					<Text fontSize={14}>{ "Platform for programmers"}</Text>
// 				</Flex>
// 				<Text fontSize={12} color={"gray"}>
//                        1m ago
// 				</Text>
// 			</Flex>
// 		</Flex>
// 	);
// };

// export default Caption;
