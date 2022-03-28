<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <title>Challenge</title>
</head>
<body>
<form class="mt-5 d-flex flex-column w-25 justify-content-center align-items-center" action="" method="POST">
        <input class="mb-3" type="text" name="lname" placeholder="your Last name">
        <input class="mb-3" type="text" name="fname" placeholder="your First name">
        <input class="mb-3" type="email" name="email" placeholder="your email" id="email">
        <span class="text-danger" id="emailstatus"></span>
        <textarea class="mb-3" type="text" rows="5" name="text" placeholder="your text"></textarea>
        <input id="button" class="mb-3" type="button" name="submit" value="submit">
    </form>

    <script src="script.js"></script>
</body>
</html>