import React from "react";
import SecondPanel from "../components/SecondPanel";
import FirstPanel from "../components/FirstPanel";
import { render,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const t = {
  name: "CGV",
  courseID: "23757367CGV6",
  description: "description",
  content: [
    {
      id: "1",
      name: "Chapter 56",
      slides: [
        {
          id: "0",
          chapter: "0",
          name: "title 34",
          duration: "2",
          body: [
            {
              id: "1",
              type: "title",
              content: "title 34",
            },
            {
              id: "2",
              type: "subtitle",
              content: "my subtitle",
            },
            {
              id: "3",
              type: "paragraph",
              content: "my paragraph",
            },
            {
              id: "5",
              type: "image",
              url: "https://firebasestorage.googleapis.com/v0/b/website-18d47.appspot.com/o/Courses%2FCGV%2FChapter%2056%2Ftitle%2FScreenshot%20(1).png?alt=media&token=36d7af60-82e2-46ab-87a6-ccd578e5d865",
            },
          ],
        },
      ],
      outcomes: ["Learning number 45", "learning 78"],
    },
  ],
  images: [
    {
      id: "0",
      url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYYGRgZGRkZGhgZGhgaGBgYGhgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHxISHzYrJSw0NDQ0NDY0NDY0NjQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAD0QAAEDAgQEAwYFAgUEAwAAAAEAAhEDIQQSMUEFUWFxIoGRBhMyobHwFEJSwdFy4RVigqLxIzOSwgdUk//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACMRAAICAgIDAQEBAQEAAAAAAAABAhEDIRIxE0FRBGEiMsH/2gAMAwEAAhEDEQA/ANw3g1Sn4qbrzOWfCRyhXmHDg0FwugUAS4tcdyRGkbJpzTEBw81nKTl2VGKXQnicSGPg9+wUm1W89bg7IWIAe9oIHOdzHJL1qGRsiwBkDYc45bopMLLUUgl69GEXAPJEzIOnTmEzWZIUdDKY0iV47DGE9TZdHNMIsCjfShQyq1qUQl6lFOwEMi73SbbQRPcpiEHMUHMTVRqjCpCFCxcxqOWr0MQI8Y1HY1JsxTQ/IbO5c+3y9VJvEGZssj+Onp+yCqLWmEVoQKLwdEwEgIuCC5qOQoliQAC1QcUw5qE8JgCIQ3orihPKAAlDKm4qEpgDcoFSe5QDkCPYXNapMaplqAOaF0SuAU8kIGDhciZOi5AB6mNdTkkW0k9T/wAJnCYkunMfFuP3SHEWuNPM6AIg7tnrGyq24g5w9oIiA9uoMWkHmtIw5IzcqZrvwweGu0IK7ilMmnDdiDytuoU8Z4YGwHzvdeV8V4cp3FisqdmminwHGCwBpBMGDIvPca2C0mHxbXsDhv6rI1q4kx4TeDP3OqvuCVZYGuu47rTJFVaRnGW6HHaqReUyGSgV6awNRd9RBJlFayTBU24VMALV6SER9KEuXIA5zQlXtTSC9ipCFa78oJ/hZPivGCSQwkRuCBHl+b1CNxfjYc59OCMpykSJ8j22WYxOIbJktI2EEEdCCP3K5smenxidWLBrlIPiOJ1JDy45maO00mCR+ypmcaeKxl1ic0dRDQPQBN4OgcS/4crGi5AmTyjzTD/ZukKgOdwGtzfytHksY5WrUmbvHdNI0vAvaGPiJLiQAOZjUnYX+4W+wr87QeY2/ZfGMdhX4c5mnPTkSY+GdJ5jqtn7NcfgBk02t6kie7jMnsIWmPL6kZZcF7RuhTXFijhMWx4lpBjUtu3yKM8rqs5KoVeEB4TNUpKrUhAiNQJd71CrXSzqioAjnIZeouchuegVnVHKdCFANletQIeaxQLSVKk6UdqCiLKa9cxFAXZCUgAZlyL7leoAtK+FY8FrhYxI2JBkGEs7hLAczWlpnQaf+JsjsxF/EjsrgmJUpyQUmV/EcKXtBZDXix2BHl2XNexrC13xDVpImYmOqsKgB/sksdhGlrr7SOhH2VUZXpg17MjxE5nZgzL2O2mnp6q/9l6DgCXa2tf6KlxLRlDmnSzhMkDmCbrQ8KxjLNBmwvOvcLpyt8KRhBLlbLxzoQXPBRA8FDfTGy4zoAEXTTHWStUEBSY8wEwDVLqtxAVmxslCxGHBQgKxkryoYBJTbKMarKe0/HZLqVK5aPG8c9AxoGpRKSirCEXJ0jEe1eIz1HFgguJvMExb4hqdfRRwThlLyCW0myTeHv8Ahaxk7F0CUCvgn16zKY/MRodBqXZug5eqtuL4Utc0AH3YLGNZubxnedyZn66rgySjde3s9KCffpFnwqrRoUs9R7GGxOZzQXEmXZZ/ZL8SxzKoD6dO4zmS3wuZJAg6ExBTeDNN7RTcxr3BwMuZLSb+EONwAJEjn1QapbQc6kwAUwQWtFw2TJa0kkhulgbQuel37NbfXoA7iFIUslVgDHamPDBaYl08xv1VLw6i9zjQpFrnh/hdmAaabrse12hEWI6A7q9q0WlrQ5rXsOoe2cpIc1pI3Azze1uqVoVMuMnwgsytJIFwCCHes6RYlb469meS70fTOCYN1Gixj8stAnLME7k8yU2+oEMuJAtFhbl0QnaL0UqVHmSbbsk99knWMor+6A0AlUIXdSCXexPval3ggygQq8HkhGmd0+HArskoChITCJQCfGGCmzCgaJ2FAGMR6LEVtO6PTpKRnMYiPZCM1kKD2ykMXhcjZFyADOw2boUu3APBmVaEoTq0aqbYAnNLQLd0KtSkgkkIr8UvHvDgmgMhxpjWPDgCA7Na3OF2DoENDqbrA3TXGuHOc7MXRY9RYbKhwOILDqYOoC9CC5Q0zik+M9o2OC4g+Ic2TsfldWReSLiCqjhjml3g0yjMJtJvPf8AlWZxDdzEbLjnHekdUXo8fmciUqZU2lrhI1UjUhZlB6WiHWKGyvJU3mUDM57VcYNCiS343nI3oTq7y+sL557sublbMmJnUuO7judfn1Wl9rcSH12sBswGTsHHl1hUGBAdUuP6Wj5E+Q9PnzZZW2l6OzFCop/Rj2Uo5apJIMB7QbQbyXee3RR41Xe90tZLg5waCWiMpi+a2xtM/MqsxnEnUqmZpBiTA0DfhM8ht1M8lYP4i2u0upO0zPmAS1wGdhI5EyD3XLKDcuTOhSSXENwSu5+R2QgNALnAE3NjlInMCC6IOvZC41UeDek5xbctbaplM53NDh4jOUEbTN1U8I4qMPVLy0ljmOY6IaGkkFupA1A10BKtqHGnOMuwlZxOhAY0GDY5pv3tuqUHyTXRLn/mvZW4HjjHnI2lXc4fE1xaGt1BLydAIGomyDUxLvxTwRfwiL38AcPLxKxwPEnUzXdWwb2iq+S6nDnBzWNADhAMQJsDcnz0Hs5wcYmq/EvZDDk92C2C8Brb9osujgnKktUY+RqNyNlhjlpsHJov0i3yS9Sqm6zSkajF1pHE3YJ7yo033QaroXjHSmIbdU3Sz6kqRalqoKAJtfyTNNySouTNOUAhlryitel2AnRFa07pDDByZZZKhnVTD4SAa94uL0p71d7xADOZepT3q8QMcw9VzmAka+Y8lNzJCyWC4q+nA1aOW602Fx7XtDg7117Fa5MMo79GMMsZHNoGbGyOymWoY1zdPJFpYmSRe3NZOzUDWAMgmD+6z+O4E34mOGtxy6g8lo61RjkrjMPIECAQRIE66fPmtMcnF6ZnOKktmSw+PdTloM3sf7FPf4uC7M8EgtAMWuClsThXDM1zfELgxqOiQDV6HGM9nC5yho0FLirCfCXtPqPRMMx78hm5BvaIGxGsrN0XZTKssNiIZA5fYWcsKXRpHM32aDh+IDmhxcL7KHGuLupUyWML3keEDTuVm6TL8j0+i1nDvggi8ftrdc+bEo7R0YcnLtHyJtWqXPzghxJc4md9fr9yhCpBvIDhBMxDXEZgOsb9StR7UVWvqOAIc1gILgIE2sO25/hZDEsLucSLb3tJXmyS5NI9SLfFNi2LaHh7GZWsBGd5/OdhP6WgH06qow+LfScX05AdlZB/M2Jk8p1Wp/DscxzNGglxPMQ0E+rT5FVuPotLgxo1eOwYPCGzuYknpCcZJaZMk+xXh7nVxUY7Vok6CWjVx/zActQm+C8br0i2nJcxhe3KYBG0z0nT+yDhMK9kwYJY9jjvaRAO0nKFa4bAtcSdCWG+2bR0+bQfMpOS38BJsYr+0b33YC3M8scTqCPEfk4fNfSvZPEl+Hbe7PD2H5fKF8dfTLTmEglwD2mPjaDF+oJg/wBl9C9gMdLnNJ1aPl9lXj1LRORXFm5f2Vfi6Z1CbfV2QXzpqug5SpxFFyXa0gq9NMbpN4E2TsVEWMgSUniXzonatSyTe8DVACzDdO0qg3S4e1FyCEAhn8SAESjXlVpap+8RQWWLq4CE7EJT3ikwSihhffqLq68DAvDSnQIAj+JXKHu+y5GhbKv3DomD9VKkx4uwOtrAJW0bw5ocXAQeY0PkmclrRK6X+r+HMvzf0yeG4y4RIlXOGx7Hm/hcfvsq3i5AcQ5lz0i/6gRqe6qGvcIdItpzVeKM1aVE+WUHTdmxwVIy4kgz8xseiezgC9lkcHxt7fiv96K0p8Xa8ZSCD2ssJ4ZJ7RvHLFrTLOoxj/iaD9VnOI8Hbd1M92HXrBTOGxviPiEAwB05ylsVUIe45he/eNFpiUoy0yMjjKO0UxZBg6qbGo9Rxc4uOpUm012Wcdb0WPD3sjxHrcLuPcXFKnFM+N4IBGrW6F3Q7D12SVmguNgBJWU4ljC5xe49OgGwC8/9k1FUntnpfkg5O2tIhmMToLweug87n0VPWxBZIJ/NHXaT3/lWlUHITJAZGk6nUW3lZHF1y55Is0aCbk/Z+a87HG2ejN0iyY8FsbvbB/p8L3E97j0Q6dURGrgLTpvvvoLKlfiHTvEZZnSILiPkiYfFEm/KAeXhiVtLGYqezTseDlIvn8ZHpm/cormGm6jTBMucDOtxOYeeeY3ASfDmS5nINEHrmJ36iPM8k/jTNWm6LteAOuZjnAjzj0K52qdG3qzq9LwF0CC0Aj+mB8i30B5p72Lqn8TlB2JHW4t319FU45xYyCTluB3kgn6eqc9gwDiKRm7XwerXjLY9CZW2GPsyyM+qZuYuiPfa2qe921ArtA0XRZylc/EwkKuI5I+LibJBzCTZNIk9fWKWqklF905Ep0EAJ0mFFzEJ51IDmhFgGqdhQk7EFTFWyJUaDsEPIAkB57xM0qyTcQi04F5QA258KD8SAl6mY6IBoOPRFDsY/ELxB/CnmuQI3dPEBSNVqoHYeqzqOYQjUfzU0VZoKuFY/UAqsxPAAbtInkdEGjj3BWFHHAkA2VxlKPTJlGMu0U7+A1BoGnrPyhGw3DX7vDSPyxYjzWg96NivHOuq88mqZCwxT0Ub+E5jLxlO5bF/RSxXDmhhtLgIkanlKuy5QcTcwEllkPhEqKGFbkgME9TBNzuvMRwuG5hrykfZVnSfN8vZVPHOKhgyNPjP+0fq78gm8zj/AKY44VPSRmOP4oDwA6Xd3Gg8lksXWm+gnU6abfJXtWhLi51yTudzz56qn4u3Mwxtm7TaJ7XsvOnl8k7Z6UMaxwpFu/BsfRLpOUCwuCSSZsb3gmP8ywbsOTUyiwAJ/mVusC8HBscJOYOPnm25XWex+HMOcwRmzCwubQPr8k4S4toU1aszLqWYk/luR1k2H09ET3WUgm2/lF1CjW/I4EwXNMbi1+8k+idewlrWfE4Oyh2zmmC1x8j8l0OVGCjZecJqty5TGhHcGZjzKHiK5OIDBowueT/pytH+4n/WFXHwNLmmZjL02PzlEoYhjM9RxklunUEE+VgsOO7Nb9FpxWuHWiRljzcZ/ZMexGFcysx4+HM1rr3hxa2QOjnN9EnwnCOquqMgEj3TC86NLyCXAcoIE9TzX0zh3s4ym1jWk+AgscdchILmOO95I7jkujHGkYzkX1SoQln1pTVVwCTq1W9FZgLVmg3QhTKK54BQ31xsmB4aYHdcKY1UH1Qoe+GyADPgbpOpUQsVVOyrn1Sd0JCscNQXQvepcPhBdUKdAOufO8LvegJHMSiUmFxi6dAP/jOSicWTug/hO6NTwSVID3365G/A9FyYDlLGPZ8LiOkyExSxRdqAeoF1J+FAs5pBS7sN+klLQxovYfiaQeYTFGkwiWun6qtc945leMYZkFwPZFBZZvDmmxRqVV/JVra9Qde4CYpcQfvHolQWW7BOu6nlDQbwBz0hI/jwGlzoAAkumwHMrJca47702cfdt0GmY/qd+wKyyTUFs1x43N6L7intC1oIpN94b+KcrG+eruw9V89qY14LnvexzXE5nX8DiZ8Q2btO0DknDinEaSO9v+FTceqlkPERo4QIIJiDGq4XknOW+jvhijCOi/PibI5zFpsIgmeyQxNDMHiBvHXVecExUsaBtaeUGNeaYxLx27WI8/NZ20zSrQHh9ENwuUT4ajxyIaQwwPMuPqhU6Msy33sZ7CUzwyqMlVlvyPHkS0/sp0Wa5hM3jy35LVS9mfEwGJw+Wq8R+Y/VelxbEa/yrXi+GjEPtqGu/wBjQfmCnfZHg7a9eXf9tnidAkGDZvmflK6Y3NpI5pVBNso/aHhtXDikx352Z43Bn4T1ALfUhVr6RECeS+i//IWDBq0XgyC14nsWwPmVlG4LNUBOjRPnI/aVpOouvhELkr+m6/8AjbhrSyrmmMtMTvEPEfJfRC0RYrHewgaym++rw0dmgu/91qX1m7K4p8UzLI1yaA4lhOhVY+g+dVY1cUwRJufNAq4kA2BC0UWZNoUNB3IlL1ARIIKuKeLbvHmp++ZNy0nuEU/g9FBk6lBqNcN1a43EU50vtlSdXHtDRLPJVGEn0iJTjHtiBed14WcgmG8UYTBZA5zPyXVsXSA8MnoP7qvDNaohZoNXYkcMSVNmFG6l+OZ+g+ZXrsS3X5BN4Zr0JZoP2S/CwjUqMXSjsYSfv6L1r3uFgT5FUsL9i869bHfeMHUqD8UecITMLUOjfWEZnCnuu50dgnxhHthznLpf+Cv4133C5P8A+Dt5lcnyxEcc5eMx4OsFEY9hM5RKrzhW7SERtIt0ePQrmcTrUkWRoUz07LvwDY8J+arml+lvVMU3O/UPVTxY7Qd2AtqfVAfhHd0zTef1JbjnEXUMO+r4ZaGhs6ZnuaxpPQFwPkk3xVjSt0jG8bxhe9zAfCw5Y2Lh8RMawbDsq1o2Lm3jcjTqb77KsxfG2tBAF9ZPXclL4DG55eQImJ/eT9SuCalJts9GHGKSRoGAtPj+GI1nzg3+qyXtZigG+7aSS4zfUBpv/CtsXxCm1pcJm+830sfNY3Guc5+cyducC+/mnhhu2LJLVIveBYvI0X8uu899fVWp4hu4DlLdOenkqHhDAbyIiI3TdYBpcQCYEgaeicoKxKbot+E4gNxDM2jw5hFogg5f92VXtVliQLCdwLAWgHWVhKWKOZjpyQ9rj0AcCTylfScS0ATrMC/LpCia40VB8jH+0lI56ZaLuaWR2IO39Z9FuvZ/hH4eg1pble7xPG4J0b5D5yluBYGk/EMfUu+m1xY38pcSLnqMpIH8LXVXD7hdv5KS5HH+vb4mJ9s8Nmosf+h7Z/pdLY9S1ZqkAAT10X0TjmGY+hUYTbI46bt8QPqAvnTDItqHaa9Ufq/6v6H5f+a+Gt4E0iiDzc4/Rv8A6psVCCveE0IoMB1yye7iXfujuprvwpKCX8R5+aTeRv8ArCMc03LB99V57ukT4vk4papTJQjST4f0l5P4O+5ot217lBdRF8rQAeeqWyFcGkaFHB/ReRfAOIoObuT6pVzCU+5hOpXnultFtLZhNW9CHuV77hPe6Xe6VciFjEhRRGMA/KD1TXul3ulLlZajXQBhH6QmaeIjaOgXgpKQprOST7NoykuhunWteB31RW1QdyeyTbSUmtI0WMsS9G8cr9j/AJH1XJOX8z6lcs/F/S/KjBUeNYmwNd8XuHEZY/US7y380xhvaPEsMmoXiYIflc240zC866Edgs3TrHa25JedtIIm2m31U6WJcDOd1tAXR/pggwsuT+nTxj8NTj/bKs5gYxrKdTN4ngZxli2Vr4iZ+LxCw5mA0PaXFgF2dj2jXNlJHPNDQfuJWdbiiDPg8Vr02uIHQ7nTWdE0MWwx/wBMREmQ0T1bAGUXNrpuUhKEfhpx7Y1gJNNk8hmk2BFs0ifNDx3taK9F9GpShrxkzBzrSbENiZkSLjRZ9r2PByucDbw5r25NAh1id7AKJaSDD2G0zAB2lwmDvtJScm9MahFO0Qr8JdUdmYWubNg9zgBfZgEHuSUJuBxABLaT3loMZXNseQYG27WRqNF9z4TtMvGxI8WgO+xtupDMLuDjefizaSbhxcI8tlk4I25sp8bg8VYuw9QE/qblAGu/1UaeAfYPhskjUO0mbtJB02PotdwrjpY6DMciZA00Aj9rbq1b7RUngNLGZrxnF5mxBId1S41oOVmJp4fD0z/1KhzWMMIEA6TIj5+SNWDXU3OpvExLWvgvI5lrdo5X6LX4xuFe4e+bQm3xMY4jcic3Xds/ub/DcM8f9OnSfAglrGCIbAbmaTE9gk4qrBP0fJS2o5xa6ZFiG3H10X2fD1G+7ph7pLaTXO1nNkZGh72jcKhxHA2foNKIEhmYCdwHX+ZSGN4NUafCM+wIIB7nQt00ulJRmC5RLqnxZs5gbs3AEEhxAb0N2HX8y3DGNeA5pJDgHAxYgiQfmvixL2FzHU4MguGvw6E5pnnPRWtH2uxIGT3jgAALZSQALNJABGy2xLx3RllXkqz6jiMHmY9pMAscCeQLSCfRfMsP/wBzIGbTOxAF7a7o7PbPENBa5+bNLb5IjL1aTfulGcUa6+R8mwykAxbWDeN4PJRn5Tqh4IqF2fTeEsa6gwhps2Nf02RamG6fML55g/ad9J0NDsod8LnwNpGQjl18wtXhfbbCPAzPcx0XDmOgHe7ZBW+PJJRSZjlxR5NosX0R1nsgupIuH4phqxhlZhP6QZd/42KMT0K6Izs5pQoRNFd7lPZehXNABuCR0hPmRwEvcrw0k5UqCIay8zJN4Qskm/35I8g/GL+78+1/ovW0SdvlCYFI7X7mPoptYRsPmpc5eilCPsUGFfyAHVS/CHn9+iZeXdB5qLWHp6n+FDlIpRiAbgxqXWRqVFkxrsuFMaRfuVzKThyHYn6pPk/ZX+UWP4Jm6DVoNAJaEq6pUBkCe5XPxNYiLN7XUVMq4hb8vl/dclslT9Xy/uuVbFo+TtIeQSLixEXgxtE/fLSOIwMvHgyNMayB0BzCCZvr5BAZigQM4mwIiHOAmcsN3JI8immYoPlsPzDQioCGyWgQ0gENuAbel5xaOsCcDlByiQZtAt1EdAdlBlF4YQASQeWvrEDQbi6YbTcDDxabOIEw2LyY36ryriGaEQTEENEmBrrI0/hAEQWMbLYzkZS0t8EbEuMdPQ7KGEY/K7xNlokeItI1NiBE3Osi+hXrXScwiSbzc6i5kfLdRpUMpJOWQDY5ORt10CCR3EOcCIboJJzeEgC5gAHXmRM6KLK8QXMBvfP8M3uLdR1UKr7iHhh3gu3EaXt2sh1C50unM4RAsZsNJvFjppbqhoonXrNcfgiTc5relo1N4+iiwtAkBx5HKddxoZ9EKCSfDBEDLJLhPO06nqvXNeYknzuAIHwkzBIv5oJLR+Np1B42OmIDmjWNrkEpbDUj8WHqQ8EkCSw5ZktuSHHpO2iEBJLb3vrJHKfvZDe9oFjFtJm3Vrtd/spIfZaUvaXEs1cH8wWi141YW+cgp3D+1DJh9N0ndpnnoLEb7rOV6xYPEPiHMwDsRtoOiHTk2aCZvEE+YM3PmhqL9DUmumbzLRxDJF23OYOgtE7zBB7zruqTF+zjp8DmvBP5hkcGnUEglpdc6wqFjnsPgJa4cnGdotqOwKu8Hx18ZHkWi4PuzOsS3QzsdYuja6HafZTYnAPYYMsi2oI7xtbrsgjDjXP5xqeUafe611firS0NfkqtmSHtaXC40c0NiJ1gnql6mAwj/Exz6fQAPZtc6uGu5/ZNP6S18M26ADAg8w4GfL+39/TiJFzI2mZ+Zt5FXtT2a8OZlRjm883xC+gGaL7ZlXDgbw6Ad4kseTr1bGydoVMRzbloiec/M3tpsnMFxWtTM06r293uLTBsC2YOh1CLX4Y2m6HvcHOFg2m7e0gC0ai0KueW54Jpcpgkj1Av/CEwa+m74J7beIMxIABt7xvhg7Z2DbqI7brWOx9AMz+8p5T+bO2PWV8WfWy6Pk9rTvoZ58l5UxTnGz2M/VGbO4zIJuY20CpSaM3BM+xU+P4V3w1qd9JcGkns6CVYU8dSc2Q5ruxn1glfEWYgEQTmPQuNtLmJi/NenEACwtOgvfsAjkxeNH2ipjBs0fNSpVgTcGOfVfHMFxCo0F1J72NZN8zmMkwMtvCTJ0hWGG9vK7BBy1I/UL3/AClzSOvVUpIl42fVmvYTe3fVTFemL3PkV89xHtw8sGSi1j5BJeS5gaQNCIvM89FnK/G65ucQ8STpUeBt+kiBfbqk3Y1Bn15+LBNmGPQryrVvZro8v2Xxp/Fao1xDyNj7x5I2sAfrMQrDDe21djYJbUGozglwHKQQetye6fJA4M+qurnrH+mV63FNBu30MrB0PbRxZ48OA48nkj+qIMDS0nuqXF8ervLnGqWTAhj3taABs1pt9dEWgUWfWf8AEOTT5wuXx3/Fav8A9l//AOjv3cuS18Hxf0zpEwBmaY1DtOQA7otBxaPC4gA/X/hcuSNArcQ5h2cDc7Ek2knyTFXHEjLkymZALi/qQSTBFjsvVyQ0RwrRu7K0ESBN5kX5wmsThwAAzYn4iSbC+oIkfNcuSYCjsVqCAI1hoiZgk6z3iU0zEDKNCRcANAEaW0jQ2/lcuTALXqD4YLXdSSGzPIx9VwedMoPz9J7rlyQHhY0ztEW19dtlEsg9diPPpzXLlLKPHk7nMIiNteundQe0R4eUGd5kbDp8ly5BIEPItcA3ABjtPNRNNsmZFxI5R28+a5cgAdVhEidZ0Av3TuExRaJkAG1pEjlYT/x2Xi5MDVez/EHB2Wwu5wLZGWNRmmTNjpz1Wqq1waeYtaTFy6SIBMnnpbReLkIb6Mzxvh5eGBtoaQ10AQ0wADBBAkOteJWLc5oeWwZDspI1DhYkfLdcuQugfZ4MK03B1nmL2EGPr1S+JoW08QmCSfhIuPouXJkgcK2T1gEg3tOU3HmngS0SNHGByB7ff7rlyYLoV4g4taXxA0Ma/lIj1CDwyi2A87k5RyHPlK8XJ+ifZYPr3MAx1ImNI5ckvUqyJiNhBt6baFcuQMj+IiYvpYj77KeHognO7YwB/m5nmB1XLkMB2rXgiAYjc8uXzS76sgmIAtM731C5cgCGbq75fyvVy5MD/9k=",
    },
  ],
};

const accounts = [
    {
      homeAccountId:
        "13196ac7-cf03-45e2-9d14-69d125fca6f6.4b1b908c-5582-4377-ba07-a36d65e34934",
      environment: "login.windows.net",
      tenantId: "4b1b908c-5582-4377-ba07-a36d65e34934",
      username: "2355285@students.wits.ac.za",
      localAccountId: "13196ac7-cf03-45e2-9d14-69d125fca6f6",
      name: "Lindokuhle Mabena",
      idTokenClaims: {
        aud: "5eca034e-a0bb-4fe8-a92b-3aacea48d39e",
        iss: "https://login.microsoftonline.com/4b1b908c-5582-4377-ba07-a36d65e34934/v2.0",
        iat: 1652039967,
        nbf: 1652039967,
        exp: 1652043867,
        name: "Lindokuhle Mabena",
        nonce: "86e8bf29-8e23-4769-bbbb-d18130e9a57a",
        oid: "13196ac7-cf03-45e2-9d14-69d125fca6f6",
        preferred_username: "2355285@students.wits.ac.za",
        rh: "0.ARAAjJAbS4JVd0O6B6NtZeNJNE4Dyl67oOhPqSs6rOpI054QAAc.",
        sub: "RSY0opS1E7y_czd0TaJd6VQeN-5MqCTK-2cHcM4VDp8",
        tid: "4b1b908c-5582-4377-ba07-a36d65e34934",
        uti: "MRYUnQmt5kSPCUo_oQMVAA",
        ver: "2.0",
      },
    },
  ];

{/* <BrowserRouter>
  <DndProvider backend={HTML5Backend}>
    {" "}
    <SecondPanel
      handletab={handletab}
      course={t}
      user={[
        {
          homeAccountId:
            "13196ac7-cf03-45e2-9d14-69d125fca6f6.4b1b908c-5582-4377-ba07-a36d65e34934",
          environment: "login.windows.net",
          tenantId: "4b1b908c-5582-4377-ba07-a36d65e34934",
          username: "2355285@students.wits.ac.za",
          localAccountId: "13196ac7-cf03-45e2-9d14-69d125fca6f6",
          name: "Lindokuhle Mabena",
          idTokenClaims: {
            aud: "5eca034e-a0bb-4fe8-a92b-3aacea48d39e",
            iss: "https://login.microsoftonline.com/4b1b908c-5582-4377-ba07-a36d65e34934/v2.0",
            iat: 1652039967,
            nbf: 1652039967,
            exp: 1652043867,
            name: "Lindokuhle Mabena",
            nonce: "86e8bf29-8e23-4769-bbbb-d18130e9a57a",
            oid: "13196ac7-cf03-45e2-9d14-69d125fca6f6",
            preferred_username: "2355285@students.wits.ac.za",
            rh: "0.ARAAjJAbS4JVd0O6B6NtZeNJNE4Dyl67oOhPqSs6rOpI054QAAc.",
            sub: "RSY0opS1E7y_czd0TaJd6VQeN-5MqCTK-2cHcM4VDp8",
            tid: "4b1b908c-5582-4377-ba07-a36d65e34934",
            uti: "MRYUnQmt5kSPCUo_oQMVAA",
            ver: "2.0",
          },
        },
      ]}
    />
  </DndProvider>
</BrowserRouter>; */}



test("Add Image Btn",()=>{
    const setCourse = ()=>{
    }
    const handletab = (event, num) => {};
    const {getByTestId} = render(<BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <FirstPanel
        handletab={handletab}
        setCourse={setCourse}
      />
    </DndProvider>
  </BrowserRouter>);
  const element2 = getByTestId("addImageBtn");
  expect(element2.textContent).toBe("Add Image ");
  
})

test("next btn", () => {
    const setCourse = ()=>{
    }
    const handletab = (event, num) => {};
    const {getByTestId} = render(<BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <FirstPanel
        handletab={handletab}
        setCourse={setCourse}
      />
    </DndProvider>
  </BrowserRouter>);
  const nextEl = getByTestId("nextBtn");

  expect(nextEl.textContent).toBe("Next ")

})
