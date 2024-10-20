// This file defines the class periods and final exam days.

courseInfo.classPeriods = [
	{
		topic: new Topic("Lab 0: Hello, OpenGL!", "lab00.html"),
		reading: "",
		file: "CS370_Lab00"
	},
	{
		topic: new Topic("Lab 1: Basic Geometry", "lab01.html"),
		reading: "Ch. 1",
		file: "CS370_Lab01"
	},
	{
		topic: new Topic("Lab 2: Indexing and Adding Color Attributes Per Vertex", "lab02.html"),
		reading: "Ch. 3",
		file: "CS370_Lab02"
	},
	{
		topic: new Topic("Lab 3: Linear Algebra and Transformations", "lab03.html"),
		reading: "Ch. 5",
		file: "CS370_Lab03"
	},
	{
		topic: new Topic("Lab 4: User Interaction and Animation", "lab04.html"),
		reading: "",
		file: "CS370_Lab04"
	},
	{
		topic: new Topic("Lab 5: 3D Orthographic Projection", "lab05.html"),
		reading: "Ch. 5",
		file: "CS370_Lab05"
	},
	{
		topic: new Topic("Lab 6: 3D Models, Perspective Projection, and Cameras", "lab06.html"),
		reading: "Ch. 5",
		file: "CS370_Lab06"
	},
	{
		topic: new Topic("Lab 7: Graphics Pipeline and Using Shaders", "lab07.html"),
		reading: "Ch. 2",
		file: "CS370_Lab07"
	},
	{
		topic: new Topic("Lab 8: Writing Shaders", "lab08.html"),
		reading: "Ch. 2",
		file: "CS370_Lab08"
	},
	{
		topic: new TopicNoLab("Exam Review")
	},
	{
		topic: new TopicNoLab("Exam 1")
	},
	{
		topic: new Topic("Lab 9: Basic Gouraud Lighting", "lab09.html"),
		reading: "Ch. 7",
		file: "CS370_Lab09"
	},
	{
		topic: new Topic("Lab 10: Advanced Phong Lighting", "lab10.html"),
		reading: "Ch. 7",
		file: "CS370_Lab10"
	},
	{
		topic: new Topic("Lab 11: Alpha Blending (Transparency)", "lab11.html"),
		reading: "Ch. 4",
		file: "CS370_Lab11"
	},
	{
		topic: new Topic("Lab 12: Blender Meshes", "lab12.html"),
		reading: "",
		file: "CS370_Lab12"
	},
	{
		topic: new Topic("Lab 13: Texture Mapping", "lab13.html"),
		reading: "Ch. 6",
		file: "CS370_Lab13"
	},
	{
		topic: new TopicNoLab("Exam Review")
	},
	{
		topic: new TopicNoLab("Exam 2")
	},
	{
		topic: new Topic("Lab 14: Scene Graphs", "lab14.html"),
		reading: "",
		file: "CS370_Lab14"
	},
	{
		topic: new Topic("Lab 15: Shadow Mapping", "lab15.html"),
		reading: "Ch. 7 <br /> <a href=https://learnopengl.com/Advanced-Lighting/Shadows/Shadow-Mapping \> LearnOpenGL Shadow Mapping Tutorial <\a>",
		file: "CS370_Lab15"
	},
	{
		topic: new Topic("Lab 16: Environment Mapping", "lab16.html"),
		reading: "",
		file: "CS370_Lab16"
	},
	{
		topic: new Topic("Lab 17: MultiTexturing", "lab17.html"),
		reading: "Ch. 6",
		file: "CS370_Lab17"
	},
	{
		topic: new Topic("Lab 18: Bump Mapping", "lab18.html"),
		reading: "Ch. 8",
		file: "CS370_Lab18"
	},
	{
		topic: new TopicNoLab("Exam Review")
	},
	{
		topic: new TopicNoLab("Exam 3")
	},
	{
		topic: new Topic("Final Project Workday", ""),
		reading: "",
		file: ""
	},
	{
		topic: new Topic("Final Project Workday", ""),
		reading: "",
		file: ""
	},
	{
		topic: new Topic("Final Project Workday", ""),
		reading: "",
		file: ""
	},
	{
		topic: new Topic("Final Project Workday", ""),
		reading: "",
		file: ""
	},

];

// The following is for the college-scheduled final exam.
// It is not used if final is on last day of class"
courseInfo.finalExamDates = [
		new FinalExamDay("101 Project Demos", new Date("12/14/2024 10:15:00")),
];

// vim:ts=2:
