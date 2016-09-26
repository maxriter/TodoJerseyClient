<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <link rel='stylesheet' href='webjars/bootstrap/3.2.0/css/bootstrap.min.css'>
    <link rel="stylesheet" type="text/css" href="resources/js/jquery.datetimepicker.css"/>
</head>
<body>

<div id="app"></div>

<script type="text/javascript" src="webjars/jquery/2.1.1/jquery.min.js"></script>
<script type="text/javascript" src="webjars/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script type="text/javascript" src="resources/js/src.js"></script>
<script src="resources/js/jquery.js"></script>
<script src="resources/js/build/jquery.datetimepicker.full.js"></script>
</body>
<script>
    $(document).on('click', '.datetimepicker', function () {
        $('.datetimepicker').datetimepicker({
            dayOfWeekStart: 1,
            lang: 'en',
            startDate: '2016/06/01',
            step:5
        });
    });
</script>
</html>
