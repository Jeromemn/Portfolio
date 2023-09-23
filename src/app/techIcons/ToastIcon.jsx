const ToastIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
         width={40} height={40}
    ><path fill="#FFF" d="M54 513H1.057V1c25.374 0 50.69 0 76.367.362-2.627 1.245-3.936 3.318-3.39 6.302.86 4.71 2.014 9.367 2.91 14.071.816 4.285 3.79 5.286 7.532 5.262 4.018-.026 7.153-2.531 7.247-5.913C91.928 13.787 91.21 6.35 85 1c105.354 0 210.708 0 316.433.353-4.69 3.524-8.613 16.863-5.278 21.548 1.443 2.027 4.626 3.657 7.13 3.826 2.102.143 5.584-1.597 6.314-3.38 1.792-4.376 2.39-9.25 3.388-13.94.802-3.773-.75-6.51-3.987-8.407h103.956v512c-13.036 0-26.027 0-39.39-.35 8.104-3.363 11.46-9.687 11.451-18.33-.033-34.134-.1-68.27.074-102.403.028-5.554-1.143-9.62-7.065-11.5-.006-6.07.006-11.682.359-17.443 5.163-1.508 6.722-4.726 6.693-9.641-.157-26.487-.017-52.976-.147-79.463-.016-3.35-.604-6.826-1.624-10.02-6.441-20.182-21.205-28.129-39.695-28.756-14.42-.489-28.87-.097-43.4-.097V151.27c13.185-.384 23.4-10.462 25.454-20.008 1.503-6.987 1.223-14.411 1.284-21.644.129-15.31-3.023-29.94-11.114-43.072-14.613-23.719-36.227-37.045-63.884-37.314-72.126-.7-144.264-.261-216.398-.21-12.349.008-24.121 3.41-34.746 9.194-18.366 9.998-30.831 25.383-37.102 45.517C59.691 96.627 59.124 110 60.194 123.2c1.564 19.28 13.083 26.773 26.582 28.247v83.146c-3.767.488-7.292 1.167-10.844 1.363-12.044.665-26.725 12.19-31.048 23.473-3.986 10.405-2.363 21.058-2.947 31.638-.307 5.565 1.102 9.63 7.029 11.52.008 6.068-.004 11.678-.355 17.441-5.166 1.51-6.693 4.737-6.683 9.647.114 54.477.166 108.955-.018 163.432C41.878 502.554 45.389 509.15 54 513M450.924 61.6c5.946-1.954 8.633-6.4 7.034-11.638-1.15-3.767-5.591-5.326-11.506-3.95-2.487.579-4.918 1.395-7.405 1.972-5.446 1.264-8.309 5.486-6.927 10.35 1.267 4.459 5.76 6.507 10.996 5.128 2.321-.612 4.7-1 7.808-1.862m-396.94-9.76c-3.726-5.23-10.052-4.366-15.145-6.356-3.59-1.402-8.7 1.162-9.767 4.347-1.437 4.29 1.012 9.835 5.104 11.123 3.654 1.15 7.35 2.253 11.103 2.982 6.842 1.329 11.084-4.195 8.704-12.096m376.438-32.842c-4.46 4.312-9.416 8.243-13.148 13.112-1.613 2.105-.876 6.473 2.561 8.072 2.33 1.084 6.15 2.46 7.555 1.396 4.59-3.478 9.468-7.407 12.187-12.3 3.134-5.64-1.847-11.035-9.155-10.28m-383.407 9.94c3.41 3.938 6.529 8.188 10.321 11.715 3.015 2.804 7.942 1.791 10.912-1.396 2.524-2.709 2.54-7.453-.186-10.594-1.951-2.248-4.334-4.127-6.235-6.412-2.9-3.485-6.352-4.421-10.532-2.952-4.309 1.515-4.493 5.084-4.28 9.638z"/>
        <path fill="#020202"
              d="M478.045 380.877c5.903 1.42 7.074 5.486 7.046 11.04-.174 34.134-.107 68.269-.074 102.404.008 8.642-3.347 14.966-11.92 18.329-108.451.35-216.805.35-325.728-.002-1.874-2.432-3.18-4.512-4.325-6.918 2.326-6.655 3.79-7.693 10.66-7.733 11.421-.068 22.842-.13 34.728-.115 49.85.08 99.235.08 148.76.08v-5.685c0-70.939-.004-141.878.016-212.817 0-2.49-.16-5.084.453-7.448 1.838-7.082 4.023-14.073 6.02-20.921-12.407 0-25.552 0-39.16-.081-74.192-.092-147.924-.103-221.656-.11a50.4 50.4 0 0 0-2.495.067c-11.757.582-21.24 9.106-22.508 20.771-.627 5.764-.503 11.62-.555 17.435-.083 9.37-.136 9.542-8.362 12.954-5.906-1.43-7.315-5.495-7.008-11.06.584-10.58-1.039-21.233 2.947-31.638 4.323-11.284 19.004-22.808 31.048-23.473 3.552-.196 7.077-.875 10.844-1.363v-83.146c-13.499-1.474-25.018-8.967-26.582-28.247-1.07-13.2-.503-26.573 3.512-39.467 6.27-20.134 18.736-35.52 37.102-45.517 10.625-5.783 22.397-9.186 34.746-9.195 72.134-.05 144.272-.49 216.398.211 27.657.269 49.27 13.595 63.884 37.314 8.09 13.133 11.243 27.762 11.114 43.072-.06 7.233.219 14.657-1.284 21.644-2.053 9.546-12.27 19.624-25.454 20.008v83.727c14.53 0 28.98-.392 43.4.097 18.49.627 33.254 8.574 39.695 28.755 1.02 3.195 1.608 6.671 1.624 10.02.13 26.488-.01 52.977.147 79.464.03 4.915-1.53 8.133-7.019 9.47-7.563-2.388-8.421-3.59-8.426-11.32-.017-24.65.066-49.301-.032-73.95-.068-16.972-9.806-26.609-26.693-26.636-21.152-.035-42.305-.025-63.457-.004-17.522.017-27.212 9.647-27.218 27.165-.024 71.119-.012 142.237-.007 213.355 0 6.463.144 6.586 6.84 6.587 34.643.003 69.286.003 103.929 0 6.54-.001 6.626-.08 6.628-6.784.007-32.478.002-64.956.004-97.434.001-9.207.223-9.539 8.418-12.905m-351.902-145.37.359.346s.477-.148 1.404.012c22.688-.065 45.376-.13 68.988-.002h76.093v-5.939c0-25.813.04-51.625-.014-77.438-.037-17.544 7.428-30.27 23.603-37.65 1.093-.499 2.346-1.906 2.496-3.029 2.45-18.245-8.67-36.856-26.497-41.177-10.103-2.449-21.057-1.388-32.515-2.196-33.328-.014-66.656-.147-99.983-.003-25.144.108-41.417 17.386-40.213 42.426.064 1.321 1.036 3.287 2.113 3.768 17.353 7.74 24.274 21.439 24.105 39.921-.244 26.82.061 53.644.061 80.96m187.805-65.653c4.114-4.129 8.182-8.306 12.357-12.373 4.275-4.163 8.472-4.545 11.83-1.241 3.242 3.19 2.847 7.665-1.202 11.837-3.943 4.063-7.594 8.561-12.087 11.912-10.873 8.108-14.935 18.365-13.146 31.823 1.036 7.79.188 15.831.188 23.798h49.18v-5.677c0-25.652.025-51.303-.008-76.955-.022-17.664 7.266-30.7 23.709-38.15 1.103-.499 2.44-1.978 2.496-3.062.54-10.385-1.28-20.116-7.918-28.628-13.43-17.221-32.115-14.933-50.679-14.52.246 1.073.25 1.61.48 2.022 9.837 17.568 9.485 36.74 8.608 55.93-.138 3.038-1.355 6.183-2.696 8.98-4.573 9.534-12.733 14.08-23.165 15.433 0 6.196-.029 12.177.063 18.157.006.416.904.82 1.99.714M109.27 235.871c.578-1.642 1.653-3.282 1.66-4.926.106-25.662.075-51.324.073-76.986 0-15.62-5.022-22.466-19.86-26.822-3.557-1.044-6.172-2.957-6.187-6.806-.03-7.484-.596-15.12.638-22.426 4.508-26.683 25.848-44.285 53.946-44.475 39.991-.27 79.986-.201 119.978-.016 22.718.105 39.322 10.506 49.731 30.808 5.497 10.72 4.854 22.232 4.95 33.713.044 5.351-2.225 8.191-7.45 9.517-12.587 3.193-18.732 11.25-18.75 24.118-.037 26.495-.012 52.99-.013 79.486v4.463h8.906v-4.31c0-26.162-.009-52.324.005-78.486.006-11.097 3.738-15.38 14.605-16.87 6.858-.94 11.417-5.911 11.52-12.837.096-6.497.114-13-.06-19.495-.832-30.917-26.937-58.033-57.869-58.5-43.48-.657-86.981-.536-130.466-.057-24.624.271-46.044 16.685-54.846 39.794-5.1 13.391-3.994 27.22-3.58 40.978.158 5.284 5.573 9.386 11.47 10.138 10.2 1.302 14.39 5.919 14.402 16.07.03 26.161.01 52.324.01 78.486v5.46c2.616 0 4.443 0 7.187-.02M399.438 70.1c-9.862-13.295-22.84-21.891-39.225-24.337-8.169-1.219-16.586-.885-24.894-1.026-8.9-.15-17.806-.034-27.517-.034 5.197 5.64 9.689 9.713 17.42 8.805 7.064-.829 14.301-.2 21.461-.17 22.866.1 39.833 9.973 50.503 30.395 6.253 11.969 5.564 24.844 4.585 37.602-.163 2.123-3.805 4.948-6.373 5.756-13.611 4.285-19.325 11.581-19.333 25.91-.013 25.81-.004 51.622-.004 77.433v5.14h8.936v-5.734c0-25.811-.01-51.623.006-77.434.007-10.478 4.186-15.212 14.495-16.53 6.93-.886 11.489-5.754 11.649-12.673.123-5.326-.019-10.658.042-15.986.154-13.403-3.61-25.578-11.75-37.117z"/>
        <path
            d="M54.469 513c-9.08-3.85-12.591-10.446-12.559-19.893.184-54.477.132-108.955.018-163.432-.01-4.91 1.517-8.137 7.01-9.485 7.6 2.502 8.336 3.555 8.337 11.399.009 53.318 0 106.636.01 159.954.001 6.19.284 6.451 6.503 6.454 15.995.009 31.997.263 47.983-.121 6.615-.16 11.27 1.477 13.152 8.504-1.378 2.433-2.65 4.527-3.923 6.62H54.469zM84.563 1c6.647 5.35 7.365 12.787 7.16 20.084-.094 3.382-3.229 5.887-7.247 5.913-3.742.024-6.716-.977-7.532-5.262-.896-4.704-2.05-9.36-2.91-14.07-.546-2.985.763-5.058 3.859-6.303C80.042 1 82.083 1 84.563 1zM408.563 1c3.675 1.897 5.226 4.634 4.424 8.407-.998 4.69-1.596 9.564-3.388 13.94-.73 1.783-4.212 3.523-6.314 3.38-2.504-.17-5.687-1.799-7.13-3.826-3.335-4.685.588-18.024 5.746-21.548C404.041 1 406.083 1 408.562 1z"/>
        <path fill="#FFF"
              d="M121.469 513c.803-2.093 2.076-4.187 3.92-6.636 6.212-.34 11.853-.324 17.494-.308 1.306 2.08 2.612 4.16 4.018 6.592-8.255.352-16.61.352-25.432.352z"/>
        <path fill="#75A4C8"
              d="M143.044 505.73c-5.802.31-11.443.293-17.549.294-2.453-6.67-7.11-8.307-13.724-8.148-15.986.384-31.988.13-47.983.121-6.219-.003-6.502-.264-6.503-6.454-.01-53.318-.001-106.636-.01-159.954-.001-7.844-.738-8.897-7.998-11.553-.315-5.771-.303-11.381-.311-17.45 8.205-3.871 8.258-4.043 8.341-13.413.052-5.816-.072-11.67.555-17.435 1.269-11.665 10.75-20.189 22.508-20.77a50.4 50.4 0 0 1 2.495-.068c73.732.007 147.464.018 221.62.464-10.434 23.267-21.273 46.108-32.157 68.928-11.101 23.274-22.212 46.543-33.382 69.785-13.551 28.194-27.223 56.33-40.722 84.549-3.644 7.618-6.85 15.445-10.256 23.176-11.422.065-22.843.127-34.264.195-6.87.04-8.334 1.078-10.66 7.733z"/>
        <path fill="#93C4DC"
              d="M478.026 380.417c-8.176 3.826-8.398 4.158-8.399 13.365-.002 32.478.003 64.956-.004 97.434-.002 6.703-.089 6.783-6.628 6.783-34.643.004-69.286.004-103.93 0-6.695 0-6.838-.123-6.839-6.586-.005-71.118-.017-142.236.007-213.355.006-17.518 9.696-27.148 27.218-27.165 21.152-.02 42.305-.03 63.457.004 16.887.027 26.625 9.664 26.693 26.636.098 24.649.015 49.3.032 73.95.005 7.73.863 8.932 8.086 11.47.313 5.782.3 11.393.307 17.464m-84.993-3.917c0 12.664-.044 25.328.019 37.991.042 8.454 3.391 15.231 10.857 19.51 14.555 8.342 31.757-1.944 31.96-19.31.242-20.659.06-41.323.061-61.985v-5.198c9.675-3.21 14.698-9.043 15.073-17.076.42-8.997-3.97-14.753-14.76-19.346-1.89-19.714-8.112-27.939-21.297-28.15-13.768-.219-19.863 7.631-22.267 28.63-7.91 3.141-13.367 8.332-13.62 17.278-.275 9.655 5.496 15.18 13.974 18.606v29.05m27.747 101.047c4.43 7.846 11.273 11.775 20.145 11.168 8.636-.591 14.989-5.162 18.27-13.328 3.292-8.19 1.682-15.712-4.075-22.244-6.693-7.591-18.18-9.094-26.815-3.741-9.283 5.755-12.324 16.278-7.525 28.145m-38.582 10.998c15.21 1.61 27.28-10.758 24.358-24.96-2.15-10.445-11.608-17.99-21.836-17.42-10.78.602-19.132 8.676-20.36 19.679-1.145 10.266 5.833 19.489 17.838 22.701z"/>
        <path
            d="M450.547 61.786c-2.73.676-5.11 1.064-7.43 1.676-5.237 1.38-9.73-.669-10.997-5.129-1.382-4.863 1.481-9.085 6.927-10.349 2.487-.577 4.918-1.393 7.405-1.972 5.915-1.376 10.356.183 11.506 3.95 1.6 5.239-1.088 9.684-7.411 11.824zM54.056 52.24c2.307 7.5-1.935 13.025-8.777 11.696-3.754-.73-7.45-1.831-11.103-2.982-4.092-1.288-6.541-6.832-5.104-11.123 1.066-3.185 6.178-5.749 9.767-4.347 5.093 1.99 11.419 1.126 15.217 6.756zM430.807 18.985c6.922-.742 11.903 4.653 8.769 10.292-2.72 4.894-7.597 8.823-12.187 12.3-1.404 1.065-5.225-.31-7.555-1.395-3.437-1.599-4.174-5.967-2.561-8.072 3.732-4.87 8.688-8.8 13.534-13.125zM47.007 28.527c-.206-4.144-.022-7.713 4.287-9.228 4.18-1.469 7.632-.533 10.532 2.952 1.9 2.285 4.284 4.164 6.235 6.412 2.727 3.141 2.71 7.885.186 10.594-2.97 3.187-7.897 4.2-10.912 1.396-3.792-3.527-6.911-7.777-10.328-12.126z"/>
        <path fill="#628FB1"
              d="M188.432 497.882c2.943-7.811 6.148-15.638 9.792-23.256 13.499-28.22 27.171-56.355 40.722-84.55 11.17-23.24 22.28-46.51 33.382-69.784a13188.324 13188.324 0 0 0 32.619-68.847c13.182-.354 26.327-.354 38.735-.354-1.998 6.848-4.183 13.84-6.02 20.921-.614 2.364-.453 4.959-.454 7.448-.02 70.939-.016 141.878-.016 212.817v5.684c-49.525 0-98.91 0-148.76-.08z"/>
        <path fill="#FEEFCF"
              d="M195.97 235.67c-22.688.065-45.376.13-68.6-.051-.7-.442-.906-.562-1.156-.607-.07-26.822-.376-53.646-.132-80.466.169-18.482-6.752-32.18-24.105-39.92-1.077-.482-2.05-2.448-2.113-3.77-1.204-25.039 15.069-42.317 40.213-42.425 33.327-.144 66.655-.011 100.446.568 1.19 23.62-.287 46.516-4.55 69.528-22.03 22.21-43.945 44.104-65.82 66.037-4.375 4.386-4.781 8.91-1.322 12.187 3.452 3.27 7.379 2.783 11.82-1.478.96-.922 1.886-1.882 2.832-2.821 14.764-14.67 29.528-29.338 44.349-43.574-.11 1.735-.02 3.136-.482 4.323-3.783 9.75-6.962 19.821-11.702 29.09-5.87 11.48-13.06 22.284-19.678 33.38M214.657 95.14c-10.94 10.949-21.89 21.888-32.81 32.857-1.284 1.29-2.609 2.613-3.564 4.14-2.058 3.287-1.681 6.98 1.38 8.879 2.252 1.396 5.71 1.177 8.603 1.052 1.191-.05 2.4-1.653 3.451-2.7a16587.838 16587.838 0 0 0 36.012-36.011c.933-.936 1.859-1.931 2.548-3.047 2.118-3.428 1.715-6.764-1.19-9.451-2.747-2.54-6.032-2.759-9.134-.574-1.75 1.233-3.205 2.885-5.296 4.855m-25.652 79.365c9.64-9.644 19.332-19.236 28.893-28.958 3.891-3.956 4.006-8.255.698-11.445-3.122-3.01-7.386-2.89-11.074.76a4658.96 4658.96 0 0 0-38.435 38.463c-3.352 3.396-3.364 7.69-.535 10.715 2.896 3.097 7.474 3.09 11.107-.25 3.056-2.811 5.905-5.848 9.346-9.285z"/>
        <path fill="#FBD9BB"
              d="M196.432 235.767c6.157-11.192 13.346-21.997 19.216-33.475 4.74-9.27 7.92-19.34 11.702-29.09.461-1.188.372-2.589.62-4.61 1.022-1.657 1.963-2.597 2.903-3.538 6.23-6.24 12.544-12.402 18.66-18.754 3.334-3.461 3.428-7.748.668-10.723-3.032-3.269-7.154-3.258-11.127.047-1.012.842-1.984 1.732-2.975 2.599 4.137-22.708 5.614-45.605 4.868-69.08 10.55.099 21.505-.962 31.608 1.487 17.827 4.32 28.947 22.932 26.497 41.177-.15 1.123-1.403 2.53-2.496 3.03-16.175 7.38-23.64 20.105-23.603 37.649.054 25.813.014 51.625.013 77.438v5.94c-25.588 0-50.84 0-76.554-.097z"/>
        <path fill="#FCDABC"
              d="M313.647 170.11c-.785-.152-1.683-.555-1.69-.971-.09-5.98-.062-11.961-.062-18.157 10.432-1.353 18.592-5.899 23.165-15.433 1.34-2.797 2.558-5.942 2.697-8.98.876-19.19 1.228-38.362-8.609-55.93-.23-.411-.234-.949-.48-2.021 18.564-.414 37.25-2.702 50.679 14.519 6.638 8.512 8.459 18.243 7.918 28.628-.057 1.084-1.393 2.563-2.496 3.063-16.443 7.448-23.73 20.485-23.709 38.149.033 25.652.009 51.303.009 76.955v5.677h-49.18c0-7.967.847-16.008-.189-23.798-1.79-13.458 2.273-23.715 13.146-31.823 4.493-3.35 8.144-7.849 12.087-11.912 4.049-4.172 4.444-8.646 1.202-11.837-3.358-3.304-7.555-2.922-11.83 1.241-4.175 4.067-8.243 8.244-12.658 12.63z"/>
        <path fill="#DA9261"
              d="M108.812 235.88c-2.285.01-4.112.01-6.727.01v-5.46c0-26.162.019-52.325-.01-78.487-.012-10.15-4.203-14.767-14.403-16.069-5.897-.752-11.312-4.854-11.47-10.138-.414-13.758-1.52-27.587 3.58-40.978 8.802-23.11 30.222-39.523 54.846-39.794 43.485-.479 86.986-.6 130.466.057 30.932.467 57.037 27.583 57.868 58.5.175 6.495.157 12.998.06 19.495-.102 6.926-4.66 11.897-11.519 12.837-10.867 1.49-14.599 5.773-14.605 16.87-.014 26.162-.005 52.324-.005 78.486v4.31h-8.906v-4.463c0-26.495-.024-52.99.013-79.486.018-12.868 6.163-20.925 18.75-24.118 5.225-1.326 7.494-4.166 7.45-9.517-.096-11.481.547-22.992-4.95-33.713-10.409-20.302-27.013-30.703-49.731-30.808-39.992-.185-79.987-.253-119.978.016-28.098.19-49.438 17.792-53.946 44.475-1.234 7.306-.668 14.942-.638 22.426.015 3.849 2.63 5.762 6.188 6.806 14.837 4.356 19.858 11.202 19.86 26.822.001 25.662.032 51.324-.074 76.986-.007 1.644-1.082 3.284-2.119 4.935z"/>
        <path fill="#C37A59"
              d="M399.657 70.387c7.921 11.25 11.686 23.426 11.532 36.829-.061 5.328.08 10.66-.042 15.986-.16 6.919-4.72 11.787-11.649 12.673-10.31 1.318-14.488 6.052-14.495 16.53-.016 25.811-.006 51.623-.006 77.434v5.733h-8.936v-5.139c0-25.811-.01-51.622.004-77.434.008-14.328 5.722-21.624 19.333-25.909 2.568-.808 6.21-3.633 6.373-5.756.979-12.758 1.668-25.633-4.585-37.602-10.67-20.422-27.637-30.294-50.503-30.394-7.16-.031-14.397-.66-21.46.17-7.732.907-12.224-3.166-17.42-8.806 9.71 0 18.615-.117 27.516.034 8.308.141 16.725-.193 24.894 1.026 16.385 2.446 29.363 11.042 39.444 24.625z"/>
        <path fill="#FBD9BB"
              d="M126.179 235.259c.285-.202.49-.082.726.28.074.166-.403.314-.403.314s-.359-.347-.323-.594z"/>
        <path fill="#010202"
              d="M393.033 376v-28.55c-8.478-3.425-14.249-8.95-13.975-18.606.254-8.946 5.71-14.137 13.621-17.277 2.404-21 8.499-28.85 22.267-28.63 13.185.21 19.408 8.435 21.297 28.149 10.79 4.593 15.18 10.35 14.76 19.346-.375 8.033-5.398 13.865-15.073 17.076v5.198c-.001 20.662.18 41.326-.06 61.985-.204 17.366-17.406 27.652-31.961 19.31-7.466-4.279-10.815-11.056-10.857-19.51-.063-12.663-.018-25.327-.02-38.491m14.987-13.495v40.39c.001 3.989-.141 7.985.058 11.965.2 3.984 2.417 6.908 6.444 6.885 4.028-.023 6.067-2.984 6.409-6.957.071-.825.024-1.661.024-2.492 0-19.78.007-39.559-.01-59.338-.001-1.594-.158-3.189-.238-4.711h-12.687v14.258m11.474-36.452c-6.992 0-13.995-.205-20.968.161-1.563.082-3.02 2.168-4.526 3.33 1.44 1.069 2.86 3.03 4.324 3.063 11.148.26 22.308.26 33.456-.003 1.447-.034 2.85-2.026 4.272-3.111-1.524-1.146-2.942-3.05-4.595-3.282-3.592-.505-7.304-.157-11.963-.158m1.312-22.834c-1.298-4.169-4.06-6.086-8.344-4.869-4.166 1.185-5.363 5.498-3.688 12.383h12.14c0-2.437 0-4.557-.108-7.514z"/>
        <path fill="#030405"
              d="M420.568 477.23c-4.587-11.55-1.546-22.073 7.737-27.828 8.635-5.353 20.122-3.85 26.815 3.741 5.757 6.532 7.367 14.054 4.076 22.244-3.282 8.166-9.635 12.737-18.271 13.328-8.872.607-15.715-3.322-20.357-11.485m23.579-5.59c2.41-4.662 1.613-8.11-2.271-9.827-3.325-1.47-7.529.18-8.146 3.863-.344 2.05.529 4.92 1.908 6.5 2.23 2.56 5.297 2.131 8.509-.537z"/>
        <path fill="#030304"
              d="M381.794 488.45c-11.601-3.117-18.579-12.34-17.434-22.606 1.228-11.003 9.58-19.077 20.36-19.679 10.228-.57 19.687 6.975 21.836 17.42 2.921 14.202-9.147 26.57-24.762 24.865m9.635-18.717c1.318-4.368-.554-7.634-4.65-8.094-2.168-.244-5.737 1.939-6.682 3.958-.79 1.69.6 5.576 2.285 6.998 3.18 2.685 6.465 1.262 9.047-2.862z"/>
        <path fill="#040303"
              d="M235.972 138.527a35.69 35.69 0 0 1 3.102-2.903c3.973-3.305 8.095-3.316 11.127-.047 2.76 2.975 2.666 7.262-.668 10.723-6.116 6.352-12.43 12.514-18.66 18.754-.94.941-1.881 1.88-2.96 3.106-14.902 14.954-29.666 29.622-44.43 44.292-.946.94-1.871 1.899-2.833 2.821-4.44 4.261-8.367 4.747-11.819 1.478-3.46-3.277-3.053-7.8 1.321-12.187 21.876-21.933 43.792-43.826 65.82-66.037z"/>
        <path fill="#090807"
              d="M214.909 94.887c1.84-1.717 3.294-3.37 5.044-4.602 3.102-2.185 6.387-1.967 9.134.574 2.905 2.687 3.308 6.023 1.19 9.45-.69 1.117-1.615 2.112-2.548 3.048a16587.838 16587.838 0 0 1-36.012 36.01c-1.05 1.048-2.26 2.65-3.45 2.701-2.894.125-6.352.344-8.603-1.052-3.062-1.9-3.439-5.592-1.381-8.88.955-1.526 2.28-2.85 3.564-4.139 10.92-10.969 21.87-21.908 33.062-33.11z"/>
        <path fill="#030303"
              d="M188.755 174.755c-3.19 3.187-6.04 6.224-9.096 9.035-3.633 3.34-8.211 3.347-11.107.25-2.83-3.026-2.817-7.32.535-10.715a4658.96 4658.96 0 0 1 38.435-38.464c3.688-3.65 7.952-3.77 11.074-.76 3.308 3.19 3.193 7.49-.698 11.446-9.561 9.722-19.254 19.314-29.143 29.208z"/>
        <path fill="#225770"
              d="M408.02 362.007v-13.76h12.686c.08 1.522.237 3.117.238 4.71.017 19.78.01 39.56.01 59.339 0 .83.047 1.667-.024 2.492-.342 3.973-2.381 6.934-6.409 6.957-4.027.023-6.244-2.9-6.444-6.885-.199-3.98-.057-7.976-.057-11.965-.002-13.464 0-26.927 0-40.888z"/>
        <path fill="#ECDEC0"
              d="M419.992 326.053c4.16 0 7.872-.347 11.464.158 1.653.232 3.07 2.136 4.595 3.282-1.423 1.085-2.825 3.077-4.272 3.111a716.094 716.094 0 0 1-33.456.003c-1.464-.034-2.884-1.994-4.324-3.062 1.506-1.163 2.963-3.249 4.526-3.33 6.973-.367 13.976-.161 21.467-.162z"/>
        <path fill="#22556E"
              d="M420.859 303.637c.054 2.539.054 4.659.054 7.096h-12.14c-1.675-6.885-.478-11.198 3.688-12.383 4.283-1.217 7.046.7 8.398 5.287z"/>
        <path fill="#37A4F6"
              d="M443.876 471.907c-2.94 2.4-6.007 2.83-8.238.27-1.38-1.581-2.252-4.452-1.908-6.501.617-3.683 4.821-5.333 8.146-3.863 3.884 1.717 4.681 5.165 2 10.094z"/>
        <path fill="#F35252"
              d="M391.269 470.082c-2.422 3.775-5.706 5.198-8.887 2.513-1.684-1.422-3.076-5.307-2.285-6.998.945-2.019 4.514-4.202 6.682-3.958 4.096.46 5.968 3.726 4.49 8.443z"/></svg>
);

export default ToastIcon;
