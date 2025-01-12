SELECT CONCAT('/home/grep/src/', F.BOARD_ID, '/', 
              F.FILE_ID, F.FILE_NAME, F.FILE_EXT) AS "FILE_PATH"
FROM USED_GOODS_FILE  AS F
WHERE F.BOARD_ID = (
                    SELECT BOARD_ID
                    FROM USED_GOODS_BOARD
                    ORDER BY VIEWS DESC
                    LIMIT 1
                    )
ORDER BY F.FILE_ID DESC;