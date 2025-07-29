export function ChevronRight({ size = 24, stroke = "#f87171" }) {
  return (
    <svg
      class="w-6 h-6 text-gray-800 dark:text-white"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke={stroke}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m9 5 7 7-7 7"
      />
    </svg>
  );
}
