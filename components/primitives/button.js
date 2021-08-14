export default function Button(props) {
  return (
    <button class="h-10 uppercase px-5 mr-4 text-sm text-pink font-extrabold hover:bg-pink hover:text-pearl dark:hover:text-darky transition-colors duration-150 border-2 border-pink rounded-lg ">
      {props.children}
    </button>
  );
}
