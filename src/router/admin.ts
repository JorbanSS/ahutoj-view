import {
	NavigationGuardNext,
	RouteLocationNormalized,
} from "vue-router";
import {
	needAdminCertificate,
	needContestAdminCertificate,
	needListAdminCertificate,
	needProblemAdminCertificate,
	needSuperAdminCertificate,
} from "./guard";

const Admin = {
	path: "/Admin",
	component: () => import("../pages/Admin.vue"),
	beforeEnter: (
		to: RouteLocationNormalized,
		from: RouteLocationNormalized,
		next: NavigationGuardNext
	) => {
		if (needAdminCertificate()) next();
	},
	children: [
		{
			path: "ProblemEdit",
			component: () => import("../components/Admin/ProblemEdit.vue"),
			beforeEnter: (
				to: RouteLocationNormalized,
				from: RouteLocationNormalized,
				next: NavigationGuardNext
			) => {
				if (needProblemAdminCertificate()) next();
			},
			redirect: "/Admin/ProblemEdit/AddProblem",
			children: [
				{
					path: "AddProblem",
					component: () =>
						import(
							"../components/Admin/ProblemEditChildren/AddProblem.vue"
						),
				},
				{
					path: "UpdateProblem",
					component: () =>
						import(
							"../components/Admin/ProblemEditChildren/UpdateProblem.vue"
						),
				},
				{
					path: "EditProblemJudgeFile",
					component: () =>
						import(
							"../components/Admin/ProblemEditChildren/EditProblemJudgeFile.vue"
						),
				},
				{
					path: "Rejudge",
					component: () =>
						import(
							"../components/Admin/ProblemEditChildren/Rejudge.vue"
						),
				},
				{
					path: "UploadProblem",
					component: () =>
						import(
							"../components/Admin/ProblemEditChildren/UploadProblem.vue"
						),
				},
				{
					path: "DownloadProblem",
					component: () =>
						import(
							"../components/Admin/ProblemEditChildren/DownloadProblem.vue"
						),
				},
			],
		},
		{
			path: "DataGenerator",
			component: () => import("../components/Admin/DataGenerator.vue"),
			beforeEnter: (
				to: RouteLocationNormalized,
				from: RouteLocationNormalized,
				next: NavigationGuardNext
			) => {
				if (needProblemAdminCertificate()) next();
			},
			redirect: "/Admin/DataGenerator/V1DataGenerator",
			children: [
				{
					path: "V1DataGenerator",
					component: () =>
						import(
							"../components/Admin/DataGeneratorChildren/V1DataGenerator.vue"
						),
				},
				{
					path: "V2DataGenerator",
					component: () =>
						import(
							"../components/Admin/DataGeneratorChildren/V2DataGenerator.vue"
						),
				},
				{
					path: "V3DataGenerator",
					component: () =>
						import(
							"../components/Admin/DataGeneratorChildren/V3DataGenerator.vue"
						),
				},
			],
		},
		{
			path: "ContestEdit",
			component: () => import("../components/Admin/ContestEdit.vue"),
			beforeEnter: (
				to: RouteLocationNormalized,
				from: RouteLocationNormalized,
				next: NavigationGuardNext
			) => {
				if (needContestAdminCertificate()) next();
			},
			redirect: "/Admin/ContestEdit/AddContest",
			children: [
				{
					path: "AddContest",
					component: () =>
						import(
							"../components/Admin/ContestEditChildren/AddContest.vue"
						),
				},
				{
					path: "UpdateContest",
					component: () =>
						import(
							"../components/Admin/ContestEditChildren/UpdateContest.vue"
						),
				},
			],
		},
		{
			path: "ListEdit",
			component: () => import("../components/Admin/ListEdit.vue"),
			beforeEnter: (
				to: RouteLocationNormalized,
				from: RouteLocationNormalized,
				next: NavigationGuardNext
			) => {
				if (needListAdminCertificate()) next();
			},
			redirect: "/Admin/ListEdit/AddList",
			children: [
				{
					path: "AddList",
					component: () =>
						import(
							"../components/Admin/ListEditChildren/AddList.vue"
						),
				},
				{
					path: "UpdateList",
					component: () =>
						import(
							"../components/Admin/ListEditChildren/UpdateList.vue"
						),
				},
			],
		},
		{
			path: "UserEdit",
			component: () => import("../components/Admin/UserEdit.vue"),
			redirect: "/Admin/UserEdit/AddUser",
			children: [
				{
					path: "AddUser",
					component: () =>
						import(
							"../components/Admin/UserEditChildren/AddUser.vue"
						),
				},
				{
					path: "BatchAddUser",
					component: () =>
						import(
							"../components/Admin/UserEditChildren/BatchAddUser.vue"
						),
				},
				{
					path: "UpdateUser",
					component: () =>
						import(
							"../components/Admin/UserEditChildren/UpdateUser.vue"
						),
				},
			],
		},
		{
			path: "AdminEdit",
			component: () => import("../components/Admin/AdminEdit.vue"),
			redirect: "/Admin/AdminEdit/AddAdmin",
			beforeEnter: (
				to: RouteLocationNormalized,
				from: RouteLocationNormalized,
				next: NavigationGuardNext
			) => {
				if (needSuperAdminCertificate()) next();
			},
			children: [
				{
					path: "AddAdmin",
					component: () =>
						import(
							"../components/Admin/AdminEditChildren/AddAdmin.vue"
						),
				},
				{
					path: "UpdateAdmin",
					component: () =>
						import(
							"../components/Admin/AdminEditChildren/UpdateAdmin.vue"
						),
				},
			],
		},
		{
			path: "NoticeEdit",
			component: () => import("../components/Admin/NoticeEdit.vue"),
			redirect: "/Admin/NoticeEdit/AddNotice",
			children: [
				{
					path: "AddNotice",
					component: () =>
						import(
							"../components/Admin/NoticeEditChildren/AddNotice.vue"
						),
				},
				{
					path: "UpdateNotice",
					component: () =>
						import(
							"../components/Admin/NoticeEditChildren/UpdateNotice.vue"
						),
				},
			],
		},
	],
};

export default Admin;
