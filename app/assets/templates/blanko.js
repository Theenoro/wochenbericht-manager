var head = `
<head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type">
    <style type="text/css">
        *{
          font-size:12px !important;
        }
        .headline{
          font-size:14px !important;
        }
        ol {
            margin: 0;
            padding: 0
        }

        table td,
        table th {
            padding: 0
        }

        .c29 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 70.4pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c11 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 70.9pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c36 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 150pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c9 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 113.9pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c14 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 48pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c38 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 35.5pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c15 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 34.9pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c22 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 110.3pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c28 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 113.9pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c18 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 302pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c10 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 258.8pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c31 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 179.9pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c1 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 258.8pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c5 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 60.8pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c33 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 48pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c25 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 60.8pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c16 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: top;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 481.9pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c32 {
            border-right-style: solid;
            padding: 2.8pt 2.8pt 2.8pt 2.8pt;
            border-bottom-color: #000000;
            border-top-width: 1pt;
            border-right-width: 1pt;
            border-left-color: #000000;
            vertical-align: bottom;
            border-right-color: #000000;
            border-left-width: 1pt;
            border-top-style: solid;
            border-left-style: solid;
            border-bottom-width: 1pt;
            width: 198.7pt;
            border-top-color: #000000;
            border-bottom-style: solid
        }

        .c21 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12px;
            font-family: "Verdana";
            font-style: normal
        }

        .c23 {
            color: #000000;
            font-weight: 700;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12px;
            font-family: "Verdana";
            font-style: italic
        }

        .c27 {
            color: #000000;
            font-weight: 700;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12px;
            font-family: "Verdana";
            font-style: normal
        }

        .c7 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            line-height: 19px;
            text-align: left;
            min-height: 12pt;
        }

        .c2 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: center;
            height: 12pt
        }

        .c37 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12px;
            font-family: "Arial";
            font-style: normal
        }

        .c4 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12px;
            font-family: "Verdana";
            font-style: normal
        }

        .c0 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12px;
            font-family: "Verdana";
            font-style: normal
        }

        .c13 {
            color: #000000;
            font-weight: 400;
            text-decoration: none;
            vertical-align: baseline;
            font-size: 12px;
            font-family: "Verdana";
            font-style: normal
        }

        .c17 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: center
        }

        .c12 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c19 {
            padding-top: 8.5pt;
            padding-bottom: 8.5pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        .c6 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: right
        }

        .c30 {
            padding-top: 0pt;
            padding-bottom: 0pt;
            line-height: 1.15;
            text-align: left;
            height: 12pt
        }

        .c8 {
            border-spacing: 0;
            border-collapse: collapse;
            margin-right: auto
        }

        .c34 {
            margin-left: auto;
            border-spacing: 0;
            border-collapse: collapse
        }

        .c26 {
            font-size: 12px;
            font-family: "Verdana";
            font-style: italic;
            font-weight: 700
        }

        .c20 {
            font-size: 12px;
            font-family: "Verdana";
            font-weight: 400
        }

        .c24 {
            font-size: 12px;
            font-family: "Verdana";
            font-weight: 400
        }

        .c35 {
            background-color: #ffffff;
            max-width: 481.9pt;
            padding: 56.7pt 42.5pt 42.5pt 70.8pt
        }

        .c3 {
            height: 0pt
        }

        .title {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12px;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: center
        }

        .subtitle {
            padding-top: 0pt;
            color: #000000;
            font-size: 12px;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: center
        }

        li {
            color: #000000;
            font-size: 12px;
            font-family: "Times New Roman"
        }

        p {
            margin: 0;
            color: #000000;
            font-size: 12px;
            font-family: "Times New Roman"
        }

        h1 {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12pt;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h2 {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12px;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.0;
            page-break-after: avoid;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h3 {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12px;
            padding-bottom: 3pt;
            font-family: "Arial";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h4 {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12px;
            padding-bottom: 3pt;
            font-family: "Times New Roman";
            line-height: 1.0;
            page-break-after: avoid;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h5 {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12px;
            padding-bottom: 3pt;
            font-family: "Times New Roman";
            line-height: 1.0;
            font-style: italic;
            orphans: 2;
            widows: 2;
            text-align: left
        }

        h6 {
            padding-top: 12pt;
            color: #000000;
            font-weight: 700;
            font-size: 12px;
            padding-bottom: 3pt;
            font-family: "Times New Roman";
            line-height: 1.0;
            orphans: 2;
            widows: 2;
            text-align: left
        }
        .c35{
          height:100vh;
        }
    </style>
</head>

`;
var template = `
<body class="c35">
    <p class="c30"><span class="c37"></span></p>
    <a id="t.61e7d4cd418760ca6c5d9c38ef7f95e1ffca2f47"></a>
    <a id="t.0"></a>
    <table class="c34">
        <tbody>
            <tr class="c3">
                <td class="c22" colspan="1" rowspan="1">
                    <p class="c6"><span class="c4">Name</span></p>
                </td>
                <td class="c36" colspan="1" rowspan="1">
                    <p class="c6"><span class="c26">{{name}}</span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p class="c7"><span class="c23"></span></p>
    <a id="t.fcf4c52cab8b9220a57da36e5cf13171b100bb6e"></a>
    <a id="t.1"></a>
    <table class="c8">
        <tbody>
            <tr class="c3">
                <td class="c32" colspan="1" rowspan="1">
                    <p class="c12"><span class="c21 headline">Ausbildungsnachweis Nr.:</span></p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c17"><span class="c24">{{num}}</span></p>
                </td>
                <td class="c38" colspan="1" rowspan="1">
                    <p class="c6"><span class="c4">von:</span></p>
                </td>
                <td class="c11" colspan="1" rowspan="1">
                    <p class="c17"><span class="c20">{{week.start}}</span></p>
                </td>
                <td class="c15" colspan="1" rowspan="1">
                    <p class="c6"><span class="c4">bis:</span></p>
                </td>
                <td class="c29" colspan="1" rowspan="1">
                    <p class="c17"><span class="c20">{{week.end}}</span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p class="c7"><span class="c4"></span></p>
    <a id="t.00de5254143ad9bcd1bb8da0e35f031d134ab41c"></a>
    <a id="t.2"></a>
    <table class="c8">
        <tbody>
            <tr class="c3">
                <td class="c25" colspan="1" rowspan="1">
                    <p class="c2"><span class="c4"></span></p>
                </td>
                <td class="c10" colspan="1" rowspan="1">
                    <p class="c17"><span class="c0">Art der ausgef&uuml;hrten Ausbildungsarbeit</span></p>
                </td>
                <td class="c33" colspan="1" rowspan="1">
                    <p class="c17"><span class="c0">Einzel-stunden</span></p>
                </td>
                <td class="c28" colspan="1" rowspan="1">
                    <p class="c17"><span class="c0">Beginn und Ende der t&auml;glichen Ausbildungszeit</span></p>
                </td>
            </tr>
            <tr class="c3">
                <td class="c5" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0"></span></p>
                </td>
                <td class="c1" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0"></span></p>
                </td>
                <td class="c14" colspan="1" rowspan="1">
                    <p class="c2"><span class="c0"></span></p>
                </td>
                <td class="c9" colspan="1" rowspan="1">
                    <p class="c7"><span class="c0"></span></p>
                </td>
            </tr>
            <!--
             {% for i in tasks %}
                {{ tasks[i].tasks[0] }},
             {% endfor %}
            -->
            {% for task in week.days.monday.tasks %}
              <tr class="c3">
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">Montag</span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
                  <td class="c1" colspan="1" rowspan="1">
                      <p class="c7"><span class="c0">{{task}}</span></p>
                  </td>
                  <td class="c14" colspan="1" rowspan="1">
                      <p class="c2"><span class="c0"></span></p>
                  </td>
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">{{week.days.monday.start}} - {{week.days.monday.end}} </span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
              </tr>
            {% endfor %}
            {% for task in week.days.tuesday.tasks %}
              <tr class="c3">
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">Dienstag</span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
                  <td class="c1" colspan="1" rowspan="1">
                      <p class="c7"><span class="c0">{{task}}</span></p>
                  </td>
                  <td class="c14" colspan="1" rowspan="1">
                      <p class="c2"><span class="c0"></span></p>
                  </td>
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">{{week.days.tuesday.start}} - {{week.days.tuesday.end}} </span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
              </tr>
            {% endfor %}
            {% for task in week.days.wednesday.tasks %}
              <tr class="c3">
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">Mittwoch</span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
                  <td class="c1" colspan="1" rowspan="1">
                      <p class="c7"><span class="c0">{{task}}</span></p>
                  </td>
                  <td class="c14" colspan="1" rowspan="1">
                      <p class="c2"><span class="c0"></span></p>
                  </td>
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">{{week.days.wednesday.start}} - {{week.days.wednesday.end}} </span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
              </tr>
            {% endfor %}
            {% for task in week.days.thursday.tasks %}
              <tr class="c3">
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">Donnerstag</span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
                  <td class="c1" colspan="1" rowspan="1">
                      <p class="c7"><span class="c0">{{task}}</span></p>
                  </td>
                  <td class="c14" colspan="1" rowspan="1">
                      <p class="c2"><span class="c0"></span></p>
                  </td>
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">{{week.days.thursday.start}} - {{week.days.thursday.end}} </span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
              </tr>
            {% endfor %}
            {% for task in week.days.friday.tasks %}
              <tr class="c3">
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">Freitag</span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
                  <td class="c1" colspan="1" rowspan="1">
                      <p class="c7"><span class="c0">{{task}}</span></p>
                  </td>
                  <td class="c14" colspan="1" rowspan="1">
                      <p class="c2"><span class="c0"></span></p>
                  </td>
                  {% if loop.index == 1 %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0">{{week.days.friday.start}} - {{week.days.friday.end}} </span></p>
                  </td>
                  {% else %}
                  <td class="c5" colspan="1" rowspan="1">
                      <p class="c12"><span class="c0"></span></p>
                  </td>
                  {% endif %}
              </tr>
            {% endfor %}
        </tbody>
    </table>
    <p class="c19"><span class="c27 headline">Bemerkungen des Ausbilders</span></p>
    <a id="t.f2ad5c384226897941fa3da988ed4bbd41ebfc6e"></a>
    <a id="t.3"></a>
    <table class="c8">
        <tbody>
            <tr class="c3">
                <td class="c16" colspan="1" rowspan="1">
                    <p class="c12"><span class="c13">Bemerkungen &uuml;ber ausgef&uuml;hrte Ausbildungsarbeiten, Zwischenpr&uuml;fungen, Ausbildungslehrg&auml;nge, Ausbildungsnachweis usw.</span></p>
                </td>
            </tr>
            <tr class="c3">
                <td class="c16" colspan="1" rowspan="1">
                    <p class="c7"><span class="c13"></span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p class="c7"><span class="c13"></span></p>
    <a id="t.16b135f71af81357b335cdb88c4ad36c6fcab4ba"></a>
    <a id="t.4"></a>
    <table class="c8">
        <tbody>
            <tr class="c3">
                <td class="c31" colspan="1" rowspan="1">
                    <p class="c17"><span class="c13">F&uuml;r die Richtigkeit aller Angaben:</span></p>
                </td>
                <td class="c18" colspan="1" rowspan="1">
                    <p class="c17"><span class="c13">F&uuml;r die Richtigkeit aller Angaben &uuml;ber die betriebliche Ausbildung:</span></p>
                </td>
            </tr>
            <tr class="c3">
                <td class="c31" colspan="1" rowspan="1">
                    <p class="c17"><span class="c13">Auszubildender</span></p>
                    <p class="c17"><span class="c13">Unterschrift + Datum</span></p>
                </td>
                <td class="c18" colspan="1" rowspan="1">
                    <p class="c17"><span class="c13">Ausbilder</span></p>
                    <p class="c17"><span class="c13">Unterschrift + Datum</span></p>
                </td>
            </tr>
        </tbody>
    </table>
    <p class="c7"><span class="c13"></span></p>
</body>

</html>`;
module.exports = [head,template];
