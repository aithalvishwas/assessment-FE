TO Run the Please Up the server https://github.com/aithalvishwas/assessment-BE and load the user from the below postman 

curl --location --request POST 'http://localhost:8080/load' \
--header 'Accept: */*' \
--header 'Accept-Language: en-US,en;q=0.9,en-IN;q=0.8' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJhdXRoIiwiZXhwIjoxNzMwODYyOTM1LCJpYXQiOjE3MzA4NTkzMzUsInRlbmFudElEIjoiMSIsIm5hbWUiOiJORVcgQnJhbmQiLCJlbWFpbCI6IjAwMXJldkBnbWFpbC5jb20ifQ.kdf0ktMY-c5JOYpSFyNbdUxA0Mdo3dIaaOuBBU9v37gbUmDTMkFXmobuB0m8bLCh4LwWor2hX_X6l8rWm-OTrg' \
--header 'Connection: keep-alive' \
--header 'Content-Type: application/json' \
--header 'Origin: http://127.0.0.1:5500' \
--header 'Referer: http://127.0.0.1:5500/' \
--header 'Sec-Fetch-Dest: empty' \
--header 'Sec-Fetch-Mode: cors' \
--header 'Sec-Fetch-Site: cross-site' \
--header 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0' \
--header 'sec-ch-ua: "Chromium";v="130", "Microsoft Edge";v="130", "Not?A_Brand";v="99"' \
--header 'sec-ch-ua-mobile: ?0' \
--header 'sec-ch-ua-platform: "Windows"'
