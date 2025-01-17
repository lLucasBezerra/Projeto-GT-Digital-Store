export default function ShowSearch({ showSearch }) {
  return (
    <div>
    { !showSearch && <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <circle
          cx="11.7666"
          cy="11.7666"
          r="8.98856"
          stroke="#666666"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0183 18.4852L21.5423 22.0001"
          stroke="#666666"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg> }
    { showSearch && <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <circle
          cx="11.7666"
          cy="11.7666"
          r="8.98856"
          stroke="#C92071"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.0183 18.4852L21.5423 22.0001"
          stroke="#C92071"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg> }
    </div>
  );
}
