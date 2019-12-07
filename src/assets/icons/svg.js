import React from 'react';
import "./svg.css"

export const Avatar = () => (
    <svg viewBox="0 0 55 55" width="45px" height="45px" className="avatar">
        <path
            fill="#000000"
            d="M55,27.5C55,12.337,42.663,0,27.5,0S0,12.337,0,27.5c0,8.009,3.444,15.228,8.926,20.258l-0.026,0.023l0.892,0.752  c0.058,0.049,0.121,0.089,0.179,0.137c0.474,0.393,0.965,0.766,1.465,1.127c0.162,0.117,0.324,0.234,0.489,0.348  c0.534,0.368,1.082,0.717,1.642,1.048c0.122,0.072,0.245,0.142,0.368,0.212c0.613,0.349,1.239,0.678,1.88,0.98  c0.047,0.022,0.095,0.042,0.142,0.064c2.089,0.971,4.319,1.684,6.651,2.105c0.061,0.011,0.122,0.022,0.184,0.033  c0.724,0.125,1.456,0.225,2.197,0.292c0.09,0.008,0.18,0.013,0.271,0.021C25.998,54.961,26.744,55,27.5,55  c0.749,0,1.488-0.039,2.222-0.098c0.093-0.008,0.186-0.013,0.279-0.021c0.735-0.067,1.461-0.164,2.178-0.287  c0.062-0.011,0.125-0.022,0.187-0.034c2.297-0.412,4.495-1.109,6.557-2.055c0.076-0.035,0.153-0.068,0.229-0.104  c0.617-0.29,1.22-0.603,1.811-0.936c0.147-0.083,0.293-0.167,0.439-0.253c0.538-0.317,1.067-0.648,1.581-1  c0.185-0.126,0.366-0.259,0.549-0.391c0.439-0.316,0.87-0.642,1.289-0.983c0.093-0.075,0.193-0.14,0.284-0.217l0.915-0.764  l-0.027-0.023C51.523,42.802,55,35.55,55,27.5z M2,27.5C2,13.439,13.439,2,27.5,2S53,13.439,53,27.5  c0,7.577-3.325,14.389-8.589,19.063c-0.294-0.203-0.59-0.385-0.893-0.537l-8.467-4.233c-0.76-0.38-1.232-1.144-1.232-1.993v-2.957  c0.196-0.242,0.403-0.516,0.617-0.817c1.096-1.548,1.975-3.27,2.616-5.123c1.267-0.602,2.085-1.864,2.085-3.289v-3.545  c0-0.867-0.318-1.708-0.887-2.369v-4.667c0.052-0.519,0.236-3.448-1.883-5.864C34.524,9.065,31.541,8,27.5,8  s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.345-1.883,5.864v4.667c-0.568,0.661-0.887,1.502-0.887,2.369v3.545  c0,1.101,0.494,2.128,1.34,2.821c0.81,3.173,2.477,5.575,3.093,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313  c-0.252,0.137-0.502,0.297-0.752,0.476C5.276,41.792,2,35.022,2,27.5z M42.459,48.132c-0.35,0.254-0.706,0.5-1.067,0.735  c-0.166,0.108-0.331,0.216-0.5,0.321c-0.472,0.292-0.952,0.57-1.442,0.83c-0.108,0.057-0.217,0.111-0.326,0.167  c-1.126,0.577-2.291,1.073-3.488,1.476c-0.042,0.014-0.084,0.029-0.127,0.043c-0.627,0.208-1.262,0.393-1.904,0.552  c-0.002,0-0.004,0.001-0.006,0.001c-0.648,0.16-1.304,0.293-1.964,0.402c-0.018,0.003-0.036,0.007-0.054,0.01  c-0.621,0.101-1.247,0.174-1.875,0.229c-0.111,0.01-0.222,0.017-0.334,0.025C28.751,52.97,28.127,53,27.5,53  c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.265-0.131-1.89-0.233  c-0.028-0.005-0.056-0.01-0.084-0.015c-1.322-0.221-2.623-0.546-3.89-0.971c-0.039-0.013-0.079-0.027-0.118-0.04  c-0.629-0.214-1.251-0.451-1.862-0.713c-0.004-0.002-0.009-0.004-0.013-0.006c-0.578-0.249-1.145-0.525-1.705-0.816  c-0.073-0.038-0.147-0.074-0.219-0.113c-0.511-0.273-1.011-0.568-1.504-0.876c-0.146-0.092-0.291-0.185-0.435-0.279  c-0.454-0.297-0.902-0.606-1.338-0.933c-0.045-0.034-0.088-0.07-0.133-0.104c0.032-0.018,0.064-0.036,0.096-0.054l7.907-4.313  c1.36-0.742,2.205-2.165,2.205-3.714l-0.001-3.602l-0.23-0.278c-0.022-0.025-2.184-2.655-3.001-6.216l-0.091-0.396l-0.341-0.221  c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545c0-0.465,0.197-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131  c-0.003-0.024-0.298-2.429,1.396-4.36C21.583,10.837,24.061,10,27.5,10c3.426,0,5.896,0.83,7.346,2.466  c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298c0.359,0.324,0.557,0.758,0.557,1.223v3.545  c0,0.713-0.485,1.36-1.181,1.575l-0.497,0.153l-0.16,0.495c-0.59,1.833-1.43,3.526-2.496,5.032c-0.262,0.37-0.517,0.698-0.736,0.949  l-0.248,0.283V39.8c0,1.612,0.896,3.062,2.338,3.782l8.467,4.233c0.054,0.027,0.107,0.055,0.16,0.083  C42.677,47.979,42.567,48.054,42.459,48.132z"
        />
    </svg>
);


export const ProfilePhoto = () => (
    <svg width="67" height="76" viewBox="0 0 47 56">
        <g id="Group_2145" data-name="Group 2145">
            <path
                fillRule="evenodd"
                fill="#3e3f41"
                d="M23.5,56a18.226,18.226,0,0,1-13.432-5.984A20.718,20.718,0,0,1,4.839,39.362a5.917,5.917,0,0,1-.311-11.569V17.277a3.5,3.5,0,0,0-.648.523,1.632,1.632,0,0,1-2.127.232,1.861,1.861,0,0,1-.714-2.137l.485-1.522A8.2,8.2,0,0,1,2.663,12.1C3.215,6.611,6.79,2.753,13.027.928a23.473,23.473,0,0,1,14.626.514l6.253,2.25a6.107,6.107,0,0,1,5.691.751,6.92,6.92,0,0,1,2.876,5.683V27.793a5.917,5.917,0,0,1-.28,11.564,20.392,20.392,0,0,1-5.277,10.751A18.321,18.321,0,0,1,23.5,56ZM6.52,35.684a18.777,18.777,0,0,0,4.967,12.849A16.3,16.3,0,0,0,23.5,53.888h0a16.4,16.4,0,0,0,12.005-5.273A18.445,18.445,0,0,0,40.48,35.883V26.075a8.805,8.805,0,0,1-7.457-8.9V14.311a19.186,19.186,0,0,1-10.51,6.064A18.589,18.589,0,0,1,8.147,17.366a3.315,3.315,0,0,0-1.627-.587ZM1.992,33.552a3.724,3.724,0,0,0,2.585,3.607q-.049-.733-.049-1.475V29.96A3.727,3.727,0,0,0,1.992,33.552Zm40.48,2.332c0,.426-.014.85-.039,1.271a3.81,3.81,0,0,0,.039-7.195ZM34.933,5.566l.082,11.611a6.75,6.75,0,0,0,5.465,6.769V10.126A4.714,4.714,0,0,0,38.495,6.2a4.214,4.214,0,0,0-2.438-.793A4.166,4.166,0,0,0,34.933,5.566ZM9.236,15.6a16.7,16.7,0,0,0,12.906,2.7,17.421,17.421,0,0,0,10.877-7.268l-.077-5.457L27.012,3.442a21.594,21.594,0,0,0-13.456-.477c-4.408,1.29-7.21,3.595-8.367,6.867.172-.1.347-.187.527-.269a7.186,7.186,0,0,1,6.176.1,5.393,5.393,0,0,0,6.534-1.443l.247-.3a.956.956,0,0,1,1.405-.091,1.1,1.1,0,0,1,.087,1.491l-.247.3A7.318,7.318,0,0,1,11.05,11.58,5.3,5.3,0,0,0,6.5,11.5a5.8,5.8,0,0,0-3.089,3.544l-.194.608A5.144,5.144,0,0,1,9.236,15.6Zm2.549,27.8a1.1,1.1,0,0,1,0-1.494.957.957,0,0,1,1.408,0,14.012,14.012,0,0,0,20.614,0,.957.957,0,0,1,1.408,0,1.1,1.1,0,0,1,0,1.494,15.928,15.928,0,0,1-23.43,0ZM31.116,32.979a1.1,1.1,0,0,1,0-1.493,3.665,3.665,0,0,1,5.392,0,1.1,1.1,0,0,1,0,1.493.956.956,0,0,1-1.409,0,1.75,1.75,0,0,0-2.575,0,.956.956,0,0,1-1.408,0Zm-20.624,0a1.1,1.1,0,0,1,0-1.493,3.66,3.66,0,0,1,5.391,0,1.1,1.1,0,0,1,0,1.493.956.956,0,0,1-1.408,0,1.749,1.749,0,0,0-2.575,0,.956.956,0,0,1-1.408,0Z"
            />

        </g>
    </svg>
);
export const ProfPhoto = () => (
    <svg width="50" height="80" className="profphoto" viewBox="0 0 47 56">
        <g id="Group_2145" data-name="Group 2145">
            <path
                fillRule="evenodd"
                fill="#3e3f41"
                d="M23.5,56a18.226,18.226,0,0,1-13.432-5.984A20.718,20.718,0,0,1,4.839,39.362a5.917,5.917,0,0,1-.311-11.569V17.277a3.5,3.5,0,0,0-.648.523,1.632,1.632,0,0,1-2.127.232,1.861,1.861,0,0,1-.714-2.137l.485-1.522A8.2,8.2,0,0,1,2.663,12.1C3.215,6.611,6.79,2.753,13.027.928a23.473,23.473,0,0,1,14.626.514l6.253,2.25a6.107,6.107,0,0,1,5.691.751,6.92,6.92,0,0,1,2.876,5.683V27.793a5.917,5.917,0,0,1-.28,11.564,20.392,20.392,0,0,1-5.277,10.751A18.321,18.321,0,0,1,23.5,56ZM6.52,35.684a18.777,18.777,0,0,0,4.967,12.849A16.3,16.3,0,0,0,23.5,53.888h0a16.4,16.4,0,0,0,12.005-5.273A18.445,18.445,0,0,0,40.48,35.883V26.075a8.805,8.805,0,0,1-7.457-8.9V14.311a19.186,19.186,0,0,1-10.51,6.064A18.589,18.589,0,0,1,8.147,17.366a3.315,3.315,0,0,0-1.627-.587ZM1.992,33.552a3.724,3.724,0,0,0,2.585,3.607q-.049-.733-.049-1.475V29.96A3.727,3.727,0,0,0,1.992,33.552Zm40.48,2.332c0,.426-.014.85-.039,1.271a3.81,3.81,0,0,0,.039-7.195ZM34.933,5.566l.082,11.611a6.75,6.75,0,0,0,5.465,6.769V10.126A4.714,4.714,0,0,0,38.495,6.2a4.214,4.214,0,0,0-2.438-.793A4.166,4.166,0,0,0,34.933,5.566ZM9.236,15.6a16.7,16.7,0,0,0,12.906,2.7,17.421,17.421,0,0,0,10.877-7.268l-.077-5.457L27.012,3.442a21.594,21.594,0,0,0-13.456-.477c-4.408,1.29-7.21,3.595-8.367,6.867.172-.1.347-.187.527-.269a7.186,7.186,0,0,1,6.176.1,5.393,5.393,0,0,0,6.534-1.443l.247-.3a.956.956,0,0,1,1.405-.091,1.1,1.1,0,0,1,.087,1.491l-.247.3A7.318,7.318,0,0,1,11.05,11.58,5.3,5.3,0,0,0,6.5,11.5a5.8,5.8,0,0,0-3.089,3.544l-.194.608A5.144,5.144,0,0,1,9.236,15.6Zm2.549,27.8a1.1,1.1,0,0,1,0-1.494.957.957,0,0,1,1.408,0,14.012,14.012,0,0,0,20.614,0,.957.957,0,0,1,1.408,0,1.1,1.1,0,0,1,0,1.494,15.928,15.928,0,0,1-23.43,0ZM31.116,32.979a1.1,1.1,0,0,1,0-1.493,3.665,3.665,0,0,1,5.392,0,1.1,1.1,0,0,1,0,1.493.956.956,0,0,1-1.409,0,1.75,1.75,0,0,0-2.575,0,.956.956,0,0,1-1.408,0Zm-20.624,0a1.1,1.1,0,0,1,0-1.493,3.66,3.66,0,0,1,5.391,0,1.1,1.1,0,0,1,0,1.493.956.956,0,0,1-1.408,0,1.749,1.749,0,0,0-2.575,0,.956.956,0,0,1-1.408,0Z"
            />

        </g>
    </svg>
);

export const Edit = () => (
    <svg height="27px" width="27px" viewBox="0 0 512 512.00004">
        <path
            fillRule="evenodd"
            fill="#3e3f40"
            d="m511.132812 79.929688c-.019531-21.390626-8.367187-41.488282-23.507812-56.59375-31.226562-31.15625-81.992188-31.113282-113.183594.117187l-322.207031 323.503906c-10.480469 10.472657-18.480469 23.4375-23.136719 37.496094l-.300781.914063-28.796875 126.632812 126.984375-28.429688.945313-.3125c14.0625-4.65625 27.035156-12.648437 37.542968-23.152343l322.25-323.542969c15.113282-15.132812 23.429688-35.246094 23.410156-56.632812zm-440.714843 375.34375-13.464844-13.472657 9.722656-42.765625 46.613281 46.640625zm389.003906-346.9375-312.847656 314.105468-56.652344-56.6875 214.300781-215.160156 32.632813 32.632812 28.261719-28.261718-32.691407-32.691406 30.402344-30.519532 32.75 32.75 28.261719-28.261718-32.808594-32.808594 11.707031-11.753906c15.605469-15.625 41.023438-15.648438 56.65625-.050782 7.578125 7.5625 11.757813 17.625 11.769531 28.332032.007813 10.710937-4.152343 20.777343-11.742187 28.375zm-249.164063 363.261718h300.875v39.96875h-340.707031zm0 0"
        />
    </svg>
)

export const Remove = () => (
    <svg width="23px" height="23px" viewBox="0 0 47.971 47.971">
        <g>
            <path
                fillRule="evenodd"
                fill="#f00c27"
                d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"
            />
        </g>

    </svg>
)
export const Stars = () => (
    <svg width="10px" height="10px" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path
                fill-rule="nonzero" stroke="red"
                points="50,0 21,90 98,35 2,35 79,90" />
            />
        </g>
    </svg>
)

