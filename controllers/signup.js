import transporter from "../utils/nodemailer.js"
import student from "../models/studentModel.js"

const sendVerificationMail = async ({email, name, githubUsername, contactNumber, rollNo}) => {
    // Construct the verification URL with query parameters
    const verificationUrl = `https://git-init-foss-aasf.vercel.app?` +
        `email=${encodeURIComponent(email)}` +
        `&name=${encodeURIComponent(name)}` +
        `&githubUsername=${encodeURIComponent(githubUsername)}` +
        `&contactNumber=${encodeURIComponent(contactNumber)}` +
        `&rollNo=${encodeURIComponent(rollNo)}`;

    const res = await transporter.sendMail({
        from: process.env.SMTP_MAIL,
        to: email,
        subject: 'Verify your email address - git init FOSS',
        html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html
  dir="ltr"
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  lang="en"
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Verify Email Address - git init Foss</title>
    <!--[if (mso 16)
      ]><style type="text/css">
        a {
          text-decoration: none;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9
      ]><noscript>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG> <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      </noscript>
    <![endif]-->
    <style type="text/css">
      .rollover:hover .rollover-first {
        max-height: 0px !important;
        display: none !important;
      }
      .rollover:hover .rollover-second {
        max-height: none !important;
        display: block !important;
      }
      .rollover span {
        font-size: 0px;
      }
      u + .body img ~ div div {
        display: none;
      }
      #outlook a {
        padding: 0;
      }
      span.MsoHyperlink,
      span.MsoHyperlinkFollowed {
        color: inherit;
        mso-style-priority: 99;
      }
      a.es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors],
      #MessageViewBody a {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      @media only screen and (max-width: 600px) {
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-p-default {
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        p,
        a {
          line-height: 150% !important;
        }
        h1,
        h1 a {
          line-height: 120% !important;
        }
        h2,
        h2 a {
          line-height: 120% !important;
        }
        h3,
        h3 a {
          line-height: 120% !important;
        }
        h4,
        h4 a {
          line-height: 120% !important;
        }
        h5,
        h5 a {
          line-height: 120% !important;
        }
        h6,
        h6 a {
          line-height: 120% !important;
        }
        .es-header-body p {
        }
        .es-content-body p {
        }
        .es-footer-body p {
        }
        .es-infoblock p {
        }
        h1 {
          font-size: 30px !important;
          text-align: center;
        }
        h2 {
          font-size: 26px !important;
          text-align: center;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        h4 {
          font-size: 24px !important;
          text-align: left;
        }
        h5 {
          font-size: 20px !important;
          text-align: left;
        }
        h6 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 26px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-header-body h4 a,
        .es-content-body h4 a,
        .es-footer-body h4 a {
          font-size: 24px !important;
        }
        .es-header-body h5 a,
        .es-content-body h5 a,
        .es-footer-body h5 a {
          font-size: 20px !important;
        }
        .es-header-body h6 a,
        .es-content-body h6 a,
        .es-footer-body h6 a {
          font-size: 16px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock a {
          font-size: 12px !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3,
        .es-m-txt-c h4,
        .es-m-txt-c h5,
        .es-m-txt-c h6 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3,
        .es-m-txt-r h4,
        .es-m-txt-r h5,
        .es-m-txt-r h6 {
          text-align: right !important;
        }
        .es-m-txt-j,
        .es-m-txt-j h1,
        .es-m-txt-j h2,
        .es-m-txt-j h3,
        .es-m-txt-j h4,
        .es-m-txt-j h5,
        .es-m-txt-j h6 {
          text-align: justify !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3,
        .es-m-txt-l h4,
        .es-m-txt-l h5,
        .es-m-txt-l h6 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-m-txt-r .rollover:hover .rollover-second,
        .es-m-txt-c .rollover:hover .rollover-second,
        .es-m-txt-l .rollover:hover .rollover-second {
          display: inline !important;
        }
        .es-m-txt-r .rollover span,
        .es-m-txt-c .rollover span,
        .es-m-txt-l .rollover span {
          line-height: 0 !important;
          font-size: 0 !important;
          display: block;
        }
        .es-spacer {
          display: inline-table;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          padding: 10px 20px 10px 20px !important;
          line-height: 120% !important;
        }
        a.es-button,
        button.es-button,
        .es-button-border {
          display: inline-block !important;
        }
        .es-m-fw,
        .es-m-fw.es-fw,
        .es-m-fw .es-button {
          display: block !important;
        }
        .es-m-il,
        .es-m-il .es-button,
        .es-social,
        .es-social td,
        .es-menu {
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        .es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        .h-auto {
          height: auto !important;
        }
        h1 a {
          text-align: center;
        }
        h2 a {
          text-align: center;
        }
        h3 a {
          text-align: center;
        }
        .es-text-9223 .es-text-mobile-size-16,
        .es-text-9223 .es-text-mobile-size-16 * {
          font-size: 16px !important;
          line-height: 150% !important;
        }
        .es-text-3777 .es-text-mobile-size-16,
        .es-text-3777 .es-text-mobile-size-16 * {
          font-size: 16px !important;
          line-height: 150% !important;
        }
      }
      @media screen and (max-width: 384px) {
        .mail-message-content {
          width: 414px !important;
        }
      }
    </style>
  </head>
  <body
    data-new-gr-c-s-loaded="14.1195.0"
    class="body"
    style="width: 100%; height: 100%; padding: 0; margin: 0"
  >
    <div
      dir="ltr"
      class="es-wrapper-color"
      lang="en"
      style="background-color: #f6f6f6"
    >
      <!--[if gte mso 9
        ]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill> </v:background
      ><![endif]-->
      <table
        width="100%"
        cellspacing="0"
        cellpadding="0"
        class="es-wrapper"
        role="none"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
          background-color: #f6f6f6;
        "
      >
        <tr style="border-collapse: collapse">
          <td valign="top" style="padding: 0; margin: 0">
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-header"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    class="es-header-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                    role="none"
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        bgcolor="#1e2247"
                        align="left"
                        style="
                          margin: 0;
                          padding-top: 20px;
                          padding-right: 20px;
                          padding-bottom: 20px;
                          padding-left: 20px;
                          background-color: #1e2247;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h1
                                      style="
                                        margin: 0;
                                        font-family: tahoma, verdana, segoe,
                                          sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 26px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 31.2px;
                                        color: #666666;
                                        text-align: center;
                                      "
                                    >
                                      <strong
                                        ><span style="color: #ffffff"
                                          >Abhigyan Abhikaushalam Students'
                                          Forum</span
                                        ></strong
                                      >
                                    </h1>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        background
                        bgcolor="#281554"
                        style="padding: 0; margin: 0; background-color: #281554"
                      >
                        <table
                          width="100%"
                          cellpadding="0"
                          cellspacing="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 600px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <img
                                      alt=""
                                      width="600"
                                      src="https://res.cloudinary.com/dlafd0adt/image/upload/v1693740711/AASF%20Website%20Assests/Event%20Thumbnails/git_init_foss_vkzr41.webp"
                                      class="adapt-img"
                                      style="
                                        display: block;
                                        font-size: 14px;
                                        border: 0;
                                        outline: none;
                                        text-decoration: none;
                                      "
                                    />
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellspacing="0"
              cellpadding="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#ffffff"
                    align="center"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-top: 20px;
                          padding-right: 20px;
                          padding-left: 20px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <h2
                                      style="
                                        margin: 0;
                                        font-family: tahoma, verdana, segoe,
                                          sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 24px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 28.8px;
                                        color: #333333;
                                      "
                                    >
                                      Email Verification
                                    </h2>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        class="esdev-adapt-off"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 5px;
                        "
                      >
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          class="esdev-mso-table"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            width: 560px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              class="esdev-mso-td"
                              style="padding: 0; margin: 0"
                            >
                              <table
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                                class="es-left"
                                role="none"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align
                                    style="padding: 0; margin: 0; width: 560px"
                                  >
                                    <table
                                      width
                                      cellspacing
                                      cellpadding
                                      role="presentation"
                                      style="
                                        mso-table-lspace: 0pt;
                                        mso-table-rspace: 0pt;
                                        border-collapse: collapse;
                                        border-spacing: 0px;
                                      "
                                    >
                                      <tr style="border-collapse: collapse">
                                        <td
                                          align="left"
                                          class="es-text-9223"
                                          style="padding: 0; margin: 0"
                                        >
                                          <p
                                            class="es-text-mobile-size-16"
                                            style="
                                              margin: 0;
                                              mso-line-height-rule: exactly;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              line-height: 24px !important;
                                              letter-spacing: 0;
                                              color: #333333;
                                              font-size: 16px;
                                            "
                                          >
                                            Hi <b>${name}</b>
                                          </p>
                                          <p
                                            class="es-text-mobile-size-16"
                                            style="
                                              margin: 0;
                                              mso-line-height-rule: exactly;
                                              font-family: arial,
                                                'helvetica neue', helvetica,
                                                sans-serif;
                                              line-height: 24px !important;
                                              letter-spacing: 0;
                                              color: #333333;
                                              font-size: 16px;
                                            "
                                          >
                                            You're just one step away from
                                            diving into the vibrant world of
                                            <strong>git init FOSS</strong
                                            >!&nbsp;<br /><br />To unlock your
                                            potential and start contributing to
                                            open-source projects, simply verify
                                            your email address by clicking the
                                            link below.
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 20px;
                          padding-left: 20px;
                          padding-top: 10px;
                        "
                      >
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              align="center"
                              valign="top"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="center"
                                    style="padding: 0; margin: 0"
                                  >
                                    <span
                                      class="es-button-border"
                                      style="
                                        border-style: solid;
                                        border-color: #b0883f;
                                        background: #281554;
                                        border-width: 0px;
                                        display: inline-block;
                                        border-radius: 0px;
                                        width: auto;
                                      "
                                      ><a
                                        href="${verificationUrl}"
                                        target="_blank"
                                        class="es-button"
                                        style="
                                          mso-style-priority: 100 !important;
                                          text-decoration: none !important;
                                          mso-line-height-rule: exactly;
                                          color: #ffffff;
                                          font-size: 17px;
                                          padding: 10px 25px 10px 25px;
                                          display: inline-block;
                                          background: #281554;
                                          border-radius: 0px;
                                          font-family: -apple-system,
                                            BlinkMacSystemFont, 'Segoe UI',
                                            Roboto, Helvetica, Arial, sans-serif,
                                            'Apple Color Emoji',
                                            'Segoe UI Emoji', 'Segoe UI Symbol';
                                          font-weight: normal;
                                          font-style: normal;
                                          line-height: 20.4px;
                                          width: auto;
                                          text-align: center;
                                          letter-spacing: 0;
                                          mso-padding-alt: 0;
                                          mso-border-alt: 10px solid #281554;
                                        "
                                        >Verify Email</a
                                      >
                                    </span>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellspacing="0"
              cellpadding="0"
              align="center"
              class="es-content"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
              "
            >
              <tr style="border-collapse: collapse">
                <td
                  align="center"
                  bgcolor="transparent"
                  style="padding: 0; margin: 0"
                >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    bgcolor="#ffffff"
                    align="center"
                    class="es-content-body"
                    role="none"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #ffffff;
                      width: 600px;
                    "
                  >
                    <tr style="border-collapse: collapse">
                      <td align="left" style="padding: 20px; margin: 0">
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          width="100%"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              align="left"
                              style="padding: 0; margin: 0; width: 560px"
                            >
                              <table
                                cellpadding="0"
                                cellspacing="0"
                                width="100%"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="left"
                                    class="es-text-3777"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      class="es-text-mobile-size-16"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 24px !important;
                                        letter-spacing: 0;
                                        color: #333333;
                                        font-size: 16px;
                                      "
                                    >
                                      Join us and be part of a community that
                                      empowers collaboration and innovation.
                                      Let's make a difference together—your
                                      journey in open source starts here!
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table
              cellpadding="0"
              cellspacing="0"
              align="center"
              class="es-footer"
              role="none"
              style="
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
                border-collapse: collapse;
                border-spacing: 0px;
                width: 100%;
                table-layout: fixed !important;
                background-color: transparent;
                background-repeat: repeat;
                background-position: center top;
              "
            >
              <tr style="border-collapse: collapse">
                <td align="center" style="padding: 0; margin: 0">
                  <table
                    cellspacing="0"
                    cellpadding="0"
                    bgcolor="#1a1d2c"
                    align="center"
                    class="es-footer-body"
                    style="
                      mso-table-lspace: 0pt;
                      mso-table-rspace: 0pt;
                      border-collapse: collapse;
                      border-spacing: 0px;
                      background-color: #1a1d2c;
                      width: 600px;
                    "
                    role="none"
                  >
                    <tr style="border-collapse: collapse">
                      <td align="left" style="padding: 0; margin: 0">
                        <table
                          width="100%"
                          cellspacing="0"
                          cellpadding="0"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              valign="top"
                              align="center"
                              style="padding: 20px; margin: 0; width: 600px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                bgcolor="#ffffff"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  background-color: #ffffff;
                                "
                                role="presentation"
                              >
                                </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse: collapse">
                      <td
                        align="left"
                        style="
                          padding: 0;
                          margin: 0;
                          padding-right: 20px;
                          padding-bottom: 20px;
                          padding-left: 20px;
                        "
                      >
                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr>
    <td style="width:270px" valign="top"><![endif]-->
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="left"
                          class="es-left"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: left;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              align="center"
                              class="es-m-p20b"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="left"
                                    class="es-m-txt-c"
                                    style="padding: 0; margin: 0; font-size: 0"
                                  >
                                    <a
                                      target="_blank"
                                      href="https://aasf.in"
                                      style="
                                        mso-line-height-rule: exactly;
                                        text-decoration: none;
                                        color: #ffffff;
                                        font-size: 13px;
                                      "
                                      ><img
                                        src="https://res.cloudinary.com/dwbshru0j/image/upload/v1728074236/aasf-white_s4hbsf.png"
                                        alt=""
                                        width="65"
                                        class="adapt-img"
                                        style="
                                          display: block;
                                          font-size: 14px;
                                          border: 0;
                                          outline: none;
                                          text-decoration: none;
                                        "
                                        height="92"
                                    /></a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                        <table
                          cellspacing="0"
                          cellpadding="0"
                          align="right"
                          class="es-right"
                          role="none"
                          style="
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                            border-collapse: collapse;
                            border-spacing: 0px;
                            float: right;
                          "
                        >
                          <tr style="border-collapse: collapse">
                            <td
                              align="center"
                              style="padding: 0; margin: 0; width: 270px"
                            >
                              <table
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                                role="presentation"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                              >
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="left"
                                    class="es-m-txt-с"
                                    style="
                                      padding: 0;
                                      margin: 0;
                                      padding-bottom: 10px;
                                    "
                                  >
                                    <h3
                                      style="
                                        margin: 0;
                                        font-family: tahoma, verdana, segoe,
                                          sans-serif;
                                        mso-line-height-rule: exactly;
                                        letter-spacing: 0;
                                        font-size: 20px;
                                        font-style: normal;
                                        font-weight: normal;
                                        line-height: 24px;
                                        color: #ffffff;
                                      "
                                    >
                                      Contact Us
                                    </h3>
                                  </td>
                                </tr>
                                <tr style="border-collapse: collapse">
                                  <td
                                    align="left"
                                    style="padding: 0; margin: 0"
                                  >
                                    <p
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 19.5px;
                                        letter-spacing: 0;
                                        color: #ffffff;
                                        font-size: 13px;
                                      "
                                    >
                                      Muskan Debnath: 98637 44991
                                    </p>
                                    <p
                                      class="es-m-txt-c"
                                      style="
                                        margin: 0;
                                        mso-line-height-rule: exactly;
                                        font-family: arial, 'helvetica neue',
                                          helvetica, sans-serif;
                                        line-height: 19.5px;
                                        letter-spacing: 0;
                                        color: #ffffff;
                                        font-size: 13px;
                                      "
                                    >
                                      Pranav Zinzurde: 97633 60575
                                    </p>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`
    });    

    if (process.env.NODE_ENV === 'development') {
        console.log(new Date().toLocaleDateString(), ' - ', new Date().toLocaleTimeString(), ' - ', email, ' - Verification URL sent');
    }

    return res;
}

const apply = async (req, res) => {
    const {email, contactNumber, name, rollNo, githubUsername} = req.body;

    try {
        const mailRes = await sendVerificationMail({email, contactNumber, name, rollNo, githubUsername});

        if(mailRes) {
            res.status(200).json({message: "Verification email sent successfully"});
        } else {
            res.status(400).json({message: "Failed to send verification email"});
        }
    } catch (error) {
        console.error('Error in apply function:', error);
        res.status(500).json({message: "Internal server error"});
    }
}

const verifyEmail = async(req, res)=>{

  const {email, contactNumber, name, rollNo, githubUsername } = req.body;

  try{
    const existing = await student.findOne({
      $or: [
        { email },
        { githubUsername },
        { contactNumber },
        { rollNo }
      ]
    });
    if(existing){
      return res.status(400).json({message: "User Already Registered"});
    }
    else
    {
      const Student = await student.create({email, contactNumber, name, rollNo, githubUsername});
  res.status(200).json("Email Verified Successfully, Happy Hacking!");
    }
}
catch(error){
  console.error('Error in verifyEmail function:', error);
  res.status(500).json({message: "Internal Server Error"});
} 
}

export { apply, verifyEmail }