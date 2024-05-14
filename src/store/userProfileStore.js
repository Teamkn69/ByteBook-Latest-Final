import { create } from "zustand";

const useUserProfileStore = create((set) => ({
	userProfile: null,
	setUserProfile: (userProfile) => set({ userProfile }),
	// this is used to update the number of posts in the profile page
	addPost: (post) =>
		set((state) => ({
			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
		})),
	deletePost: (postId) =>
		set((state) => ({
			userProfile: {
				...state.userProfile,
				posts: state.userProfile.posts.filter((id) => id !== postId),
			},
		})),
}));

export default useUserProfileStore;


//latest working code
// import { create } from "zustand";
// const useUserProfileStore = create((set) => ({
// 	userProfile: null,
// 	setUserProfile: (newUserProfile) => set((state) => ({
//   userProfile: {
// 		...state.userProfile,
// 		...newUserProfile
//   }
// 	})),
// 		// this is used to update the number of posts in the profile page
// 		addPost: (post) =>
// 			set((state) => ({
// 				userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts] },
// 			})),
// 		deletePost: (postId) =>
// 			set((state) => ({
// 				userProfile: {
// 					...state.userProfile,
// 					posts: state.userProfile.posts.filter((id) => id !== postId),
// 				},
// 			})),
// 	}));
//   export default useUserProfileStore;


 // initial version of code 
  // const useUserProfileStore = create((set) => ({
// 	userProfile:null,
// 	setUserProfile: (userProfile) => ({ userProfile }),
// 	// this is used to update the number of posts in the profile page
// 	addPost: (post) =>
// 		set((state) => ({
// 			userProfile: { ...state.userProfile, posts: [post.id, ...state.userProfile.posts]},
// 		})),
// }));