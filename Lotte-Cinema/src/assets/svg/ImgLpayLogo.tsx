import * as React from "react";
import type { SVGProps } from "react";
const SvgImgLpayLogo = (props: SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" viewBox="0 0 48 17" {...props}><path fill="url(#img_lpay_logo_svg__a)" d="M0 0h48v17H0z" /><defs><pattern id="img_lpay_logo_svg__a" width={1} height={1} patternContentUnits="objectBoundingBox"><use xlinkHref="#img_lpay_logo_svg__b" transform="matrix(.00342 0 0 .0098 -.452 -.127)" /></pattern><image xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAABzCAYAAADNPJaYAAAgAElEQVR4Ae1dCbgdRZWucT5HEBBwA0dEEPwcHJBRRlRGcERHQEBFQAE3BGFgEHcRwiriMigDREO8VTd5ZDFAAEEWCWELIYIhbGEJEPZAIIAhAUJine77ar7T9933+t7bXb2d7tfd99T3ve/e10vVqb+qzn9PLecIUdbUMO8QEo4QCs4WEi4QCm4QUj8gFPxNKDBC6eeEgsVC6muFghlC6V8KqQ8S55lNy1ollosRYAQYAUagygg04RtCwV1tEkIiSvV3s5DuPlWGgWVnBBgBRoARKAsCEg4VUj+ckpCCiUzCX4V09y9LFVkORoARYAQYgSohgJaOgvtIianX6pIwTzThg1WChWVlBBgBRoARGA8EGmZjoeAYIeGeXImpn6iuEw3n4+NRZS6TEWAEGAFGoMwIzDbrC6VPExJeK5SYeonK23DBa1Rl7iosGyPACDACxSGg4DsjO++C14v6SaSA5/QSIfVXigOBS2IEGAFGgBEoDwISjhVKLx9ni8lOdrg5o6kPKQ9oLAkjwAgwAoxAPghMNxuIJny/fBZTxJZ1qZcK3ObOiRFgBBgBRqBmCDTNm701JgUrS20xRU0nSv2UQMtvyKxXsxbi6jACjAAjMGAItL0+nCMUrKk0MfUT1wtCORME7jrkxAgwAowAI1AhBBpmS6FA1YyU+terJLwqpP6FQAuREyPACDACjECJEZiq3z8QxNRvUa0RUv+vGDKbl7h1WDRGgBFgBAYQgab7BaFgfu0tpn5iCrKqLhBT4N9r2Qtw7U26+wnpnNBeU9SnxfuEw0XTbFtLTLhSjAAjUFIElD6Y3E9eHBKoxDN6jlCwU0lbLrlYOG2b1SdiE76VvGB+gxFgBBiBJAgo94tCwa1sMUVsT28T6QwhnV2SwFvKZ6X+I017my1KWT8WihFgBCqOQNM5Tkh4nkZRxVLu/VNolbCeAuom4S+iAf9d2R6g9JMk7d509qwsBiw4I8AIlBAB6XxCKP0IiYKqKsHQyb1INPQOJWxlu0hUfhIlHGYviO8yAowAIxAXgXbYi2EmpwCrKC1pSfh75TZSKFhH0gd4HSruyOPnGAFGwIoA7kaTsJZEMaVV5nV9T8KLYrLZyop/mW4yQZWpNVgWRoAREEovYXIitJz6yFZfWplexgRVmaZiQRmB+iOgnF2ZnPIkJzBCQqsyh3uZoOo/5rmGjEBlEJAwxASVM0F5FpUzoRJ9gmqql9egKtHcLCQjUG4EFCxkgiqCoGBWuTvCiHRsQVWimVhIRmAwEODzTkWdwVpYiQ7FBFWJZmIhGYHBQKBvQb8Qa6IoUihROXpZJToU1TkonuKrRHOzkIxAuRGwENRG54O58qlhM+WhltnuYiauoKnQnS93zKQHWmbWoy07GUr9TLk7woh0VDG9mKAq0dwsJCNQbgQsBHXUAtf409XLhs3uVzt2RWzJL0jBV/Xagdc7ZsGKYT88Zo9rLNhUhaDYgir3eGXpGIGBQsBCKCfc3k1QHW1878ph8/V5rnl9c7Csqg2GwHz7L6557JUOEt2fiEko4VaFoHgNaqCGP1eWESg3AhaCmrAomKA6avm5tcYct9A1bzq/3kS1+UwwZ9zdMqt1p+bBn9+oA0GxBVXMeEXvIgq+KZRzarxYW/q0dnwuZ9dEAk4x/yyasLPAyAQSviuUM0EoOFJId3/RdHYTGHx0snl7ojyr/vBk804xBXYUytldKP1loeAYIZ2ThISjhHT38u5NM29JVE3pfk5I55TYbamcE4XUB4khs0nscprOp4RyTo5dhlcnfZA4z2wauwzqBzG4q9JfTYjNBK/PerJYCOrECILqqOnXHGN+e3/LbHVBvYhq+0scM21pq1PNyM9aEBSvQVEP0f78mvqQUEvbMh7H3tFz+jMVQkw17xLS+ZFQcJOQ+qmx52OPy/lC6dMFOo2uS5pkNvSCbyqYKBQsToQJngmUeqlQ+grRhG+IKWajPlgQc6WXJcrX38ZSP+sRYl/GPRfa8ofP0Pjz7P0uYbVQcHRPjvn/K/VPU+OCdWjC94Utg7gE5dfclzw+bHb5k2Utphe8Ev6/1zWOmftM9/qSv45h35mgfIqQN0kEKwD8NUtxGFo6P/AKaJi3espHwQLbWE5xb4VQcK6Q8OHgipT8qnIPEFJfkqLedhKQ+jLR1AcKjDqNSemrM5ch4fZINCn0pIT/iSyH6gEJZ2XGBYnflkkaguoo79ueHzYHXF8tojrsZtfc/1JyYurUmQmKCSpyfDed/7CNudj32hbS3NjPZ1FwGONMuvtF1m28H0BrCX91Z7Fo4uO0RiiYRYa/DbvZZn2ycjBidt4Jf9TExzH8BwFafraMotagOorZ9vnEK8Z87zbXrD/Vp7wohCfKY5NpYLCeK9baahHvXi0Iiteg8h2+uPZD1HcLz0fCPd66Vb4Ipcu9Ad8WClYWjglVW+JajS0poPoxomzFkNyT+iqidphhJaiwXXzx1HX3U7jB4Jf3tMxmM8tBVFtfCN75pbX2fSDdlYj4ryYERRN2haf4gsc6Tj1RKbXxy+dCgVOLZUjS2UUo/VDlMcXNLLak9MEkdcQfoGhp5pUa5h0kcnp929m9MILq6HZoGTN9acvseOn4TP/teqVjLn9y2KSfyOvUpP+Tt5n7fnwwQQWrgHoQFE7LrBAN55PBlSzg6mzzj+3dbODSKURf/y2a/KMICte82psdwqfE4sqcZ7Rr6ZxA0x56uTDmH6wERTHF16/Gx67csHzY7D2nGKI66AbXLHoxD1oaq09NLKjXSDoYE1Swlq4PQY0oSufk4IrmeLVhNhYS5pH007hKPe/n0PKIShImkdRZwi1RRaW+r/QjNDI6p7RlsABPOcU3psb7vz202pjD57vmDVNof8Ggq6bv3+aap9f0l5nHFbagfO3HBBU8xmtHUF68syniNPO64AoTX1Vmi1pM6fXq3SgLCmHEyOe976X9P48o33SxBYfFKB6WCuZtQfWSxPNrjTnlDte8bYZP0VnkC2usLWeBOevelnkZekvI93+2oHztxgQVrJnrSFA4RiVcFFxhwqtN826h9PKwcV/p63EsKIRSwX0k9ZT6V4Qt085KwVQS2XBDyGiyEEDRBOWnDzxPte+18af/1psKnvulNOeX/OVm+c4ExQQ1Oq7CvtSVoNp65Hdh1c58HT07SP0wkQLMvo5j0ZupZIxPUN9LlX+fvPq5zG3izwAPMVOc70M50cPGaOoTfEzJFDXFZyMF3GU379lh85t7W+bUO92+P/Rg8dfn811bssnnv1cTguJdfKODI4cv9SYoI5Tz4xxQQ8thEY1iHtNvpcpvdEorAr32wWwagpXuPhGlxb+t4HAiPFeNHoL2Si85QfkJoOzfeQ3KN/h5ii94cNeeoGBYSOfTwZVPeVXBhUTKj0axW3RmajnjEhRCKPUfU5fjlx29YlAlBbfSyASTukXyC9zzfTyn+MpORkHy1cSC4l183SOE9r/6ExSuR70sGmYbEuDavgXLSyw9OjO1ko47xYegNt29U5fTK+9U87bM7TTFvI9MngZ8qFueXoF9/5dhii+ICMp6jS0otqC6B1fAf4NAUG0dcmtA7ZNdGjLvFRIcMuXn022lyzOJBYU7JiW8SFMH54fJGiXgaaXPpJFFP9Sfu6XR2IJKRoVsQTFB9Q+wnitFE5SEV4XU1woJM4WCs4XSZwgFTSH1nwTVmZUwHZL1QCjVtFG4fLePOJSdLKT+mVDwO283Ip4TCnsnr+tJLCjsUrgLj0IWqR/o6aHJ/8VD2ySywLH9hVsyZoJigkrd8XgNqn+s4ZXCCEpf7pUVLMXY1fbZmrOFgr+lbutwHbJK4KHaNIlu0b17elDqB4VyjhdRTlOb5s0jXuKL2ZyRlKDQugzHvbvOUc9hvLC0qenuSyZHYNwqi/A8xZeMoHiKjy2oyHGeJ0HhdJiEIdE020bK0fvAdLOBtwNPwvNkCsfTLfqM3qIi/0e3PlS/yjv6zXN0qw9su8+JlKD7Adz0oWA+LS6+sYIyJpni60iHXuY79cv22ehkmfhT4Q+hnrqk+l9fHFy2JTO2oJIRFE/x+ToqW1Ah4y03Z7GrBDpOzZrwV6yChTRKxzvAuzaxY1mMdWXRSynunZsVFu993EJPK9eYpZPUgkKBcAqVQh6cBsaQHkkTbrCgKB/zaDp7BhdvKYAtqGQExRYUE1TwIPNdzcWC0k8L3ElFlTzHpPrPhMrnuNiioYNQpZ8kKntYNJ34ZccREoMVqhwc1KaxoDyrF9aRYCXha3Gq3/UM2Q5LvTzcVRYTVDIWsjzNBMUE1TWAg/6hJijc0q3M1kFFZbqG3sKpNgvguk/c1J5OG7MsLPopUjFL56S4xSZ6DsO/Z5Er6N00BIVCKzifSJabEmHglU0V5kT/PLzsILBGrrEFZWGjgFs1meJjTxLhoyX7HWqCyjPkBW4UkPoJEgWImzHiJAnTScrDcO95Jm9HpO8HmUWPxqpPWoJqOrvFyj+OfFPNe2JDpuCjxZRrEZzXoAJYyHKpJgTFB3Vjj9IUD5ISVAGhLsjCdzsnxEKL5HyPXpZqTSWWgL6HJNxJpqTTrEF1RJH6URo59OmdLCM/FTRIysSwKdZkISi2oCxsFHCLp/h8vyh5k0TwsCMjKL1cTDRvCC6E+KqCP2RWRhKui5SqqbfPXI6nz/TBkWVRPIDWq0V/JrqX1oLCeijnxERlhcrcCRIYAU57l+UakjJxutSaQoUFwxZUAAtZLrEFxQRlHWt4k4qg0ixqRwoX8sBU867Mygg9XUclBcdkLkfBHVHFkN6X+ioCmY3IYkF5MbJ8Y8+i0yNllc4ekfhg38tSxti7r3Q7hg0qeezhvoVJtqAsbBRwiy0o3yBhCypotNEQFCr72eafggvI6arSV2dWSg3zL1bp0MOFRR/FvHektQzqm9LdL6Zcffq1670sFhTWSek5XfmlxTFOXC+6aMYqujksFWGCCmAhyyUmKCaoyAFHYUFJuCCyHOoH8AeHRVfEu+ceYBUr+/mrYYEbO4pMeH6IIg5SVoKS+kvx2sA3RoPaUwJYvX9gJN6g99Jcm+J8LLqpLBnzFJ+FjQJu8RSfr/OzBRU89igISumvBmee49Uhs3lmxSSdn1glzO7F4jZr/nndpJjmyzLF16mXhJcytxHygQzyiTdSSNuXo90atHDKmHx6SUds+6clM7agAljIcoktKCYo+2AjWoPKc2u5rQISsu3wlHCWLXuRWcHq2db887qp4NwxxesbAxbd2vd8VgsK66ZgYl++SWQYe3ZxIFToRV3p5TRlxA1sOSZUHysyQVnYKOAWE5RvcLIFFTjGSTZJNPQOwZnnfFVlPpg5zSqhhNWZlJ+E31rzz+smhUcFCoJqwgcz4efngr64TOhayd2LJH8Jrfjur/xC9Xw/cZEboIb5UhgCtZjiU0C1ffRbeemDSudLMcWHu+rGIym4KZuC0pdbxc5uQcU/x2MVJOFNqb+SDRcwAqdQKZKCuzLL0uaBiX3ikEU2jugHXQX3kJK/cmxBhVFR8HW2oNiC6hpbQf9QEJSCnYKyzv2agvv8+iHx96jNHUo/nThPv/6S8PvcMQgqQMJ3M8mNdaCwoFA2XD/yY5L2O1qzDfP60epi2BTcQJE2v6733M+P5hv5petFn4JRYJiggoko7CoTlK//8BRf8NCjICjp7hOcec5Xs1o4UQSi9JJMChCDMI5HoogoS0VQlEQi9UGjcFKQMHINegrBtazYiQkqjG8SX6/FFB/FllnsU0xQwUOQgqDwQGvRaaZ5Uyby8PSMzSmo9+s/W3wjjPk0Hknp2ZmxoSIorD+FPB6Z6GtH4ZRwf+Y6tvvAmaN5xvriveT75ev7ny2oZBzFFpSvHzFBBQ8/EoJKMocfLEbiqxRySzjUWq6CaZmVIMYoKjJheJCsmztQ51ISFMZW8unxDN+HPblwSpkmP6xnwrAwloL5HFQygqqJBZVtK3GnPzFBBatJGkUf7TYouPT0VynCOqDjWVvCUOyd/pP2M4oEbeWnuddwPp5ZZqwrxTkov/xZ1/M6+OPRAKrNERgBOHHqCBLwyRbUQBIUh9tIPIgSvEBBUDhWm+6+CUrN/qiCv2VWxJPMhlZBsE4BeijRNamvtJZBfVPCOYnkC6sfpQWFdSQ7UOubFQmTPe71VD9aLZkzQSUjKJ7i83XmVJ2RWnuUMD8qgsIddYkWmzNggYH/LHoi5r1FkRJ48aegFTO/vnObo+9JZ5fIsigeaJp3k+1soyYoSpdE2dse22qdwAjAiZOlcCYoJqjRQW/pJ4HPMEEFD0U6gsIdUYcFF0J4Fdd0snqQwL4j9a9iSUVxjgfjNBWRqKa+EB9qgsL6K7g5cGwmHcs0z89I1ySWwtOuQT202pg7Xhw2ayt0zveFdcZMW9oyZy5umeuXDydjppGneQ2KLajIQUhLUC+LhtkmsswsDyiYS6Lk4rpnQiKz6KTY95rOcVmqHfkubsGmkLOTB/UaFFYgj9D0HXmTfsZt/z7gLQUlJagLHm2ZzWb6lJQCc/zt5Wepa54eNm+d3i333nMcs1on4ykmKB+GbEH1DTXvAiVB4diV+mExxWwUXFjGqxL+j0YJ6ydjSzJVv5+mTFync/aMXW6SBzF8PU5ZWXRn4nt5EBR6WqfyDJOprvrxJPB2P2spOAlB3bh8OHRO+JNXOWaNk0zZF/X0+UtboXIfeH0yoZmgfAQl4Yjujsb/eQhQE1R7/C6I79ssZjsofVpiJRuqS5xTY5bafix72I3OmH5FSOfTicqOeljBR0V2r+sd+cY+8yAorAtNjK0xOUPb2Df2+55xTo6CNfx+X2ZjBSUhqB0ucayV+Mjljnnp70XRTrxyzrkvnJw6g3PBivjTfUxQY31HSOeU8E43wHfyISgjcFsx/rLPmobMJkLpazr9n+QzqZ85uoitIzrJmZAVFu99moi/wXoyL4LCmEsWHV/IvYbZMj3+FuHjEhROhcWp6OYzwVy1LL7Cj0czyZ9a/poxn/mznVA79fnlPa3YBTBB+QhKwfz0nbLGb+ZGUCPY47Qcen1Ik5AYpH620/dJPqX+dRpRhNQPkJTf0W94BmcK7JhKFowELOE6Unk6cnU+8yIorDBOA3fKKf5zbirMR1+yCJzEm/mbzu9STlbCOuRG1zy/NrbeJ31w8pKW2TiBrDMeGTCCop2zPnq0n/GXNgJ5E1R7PK8QuEkgjkKebN4umvoQgQrcogtS3ZPwcuoIt033C6nKjK5DU0hnD4HrM1Gp6XxKSJiUkxzdOjKplRklu/8+9oVoXLrloXre78/PL1Ps7xZBkhAUboZIAsIm08DIB+Mr/6wstXjlsPnYn+JZTZ16bHUBmFUJNkrUwoKiJSjsE3cJCfPG9U/BHzJtyR4y7xXtPG4UEqaILIOuGIIaG4vonBOdqCr9c4EWEh6Glc4JQsEMciulX5ccGVsPBT2o9JzOWMzpc75QcJ5Q8B0v1pGEo0T74G3x27PzJChlNssJv7F+1t/2eG+VGDLrBTVt/GvBGXsFx53i65DHl29IRlII2nsvAoMbFfJKD6waNvvNTUZMKNebp4NZsiqZVDUhqOweAyx9apwGSmcgXRh/YHin8Q8WoTGQ9JNCQXIFXDRBjVdbSLglEdZBD+PaBfVuufHCI6rcPKf4EFuKsPRRdei9j9Zn5tSbqe//JBZUR5UfeUtykkKl9ZbpYL52k2sufKyVyGrplOv/nPfssLe9fcdLkxMTyvKuWWCWvuzPMd73mhDUonEmkQ6Z5PUZHUupqbcXEu6NhQM+h/7Y4qZBICic2qM6n4U/Anw6qbbf87SgsG/mN2UaPk4pNu3YGjypBdVR48ctTEdSfll2vtwxWP7Fjw+bh1d3cu7/XPl3Y+Y+M2x+c2/L7DPHMW+cGn8tzF9e5/t2F4PBTRRpUj0ISp/ZwaKWn3Gm51L5nTPbxeKoQSCohvOZWFjEfUiBqmVf9BNv3hYUYp2qX6fUpxiegyT5Qer5nsXVER7aTbIZoQwd8LCbXfMypKGm9ju1ICj0ON3TD2r1fwO+bR036HImVf3dL1rz7dysO0FJ5wedqpJ+KliQrl1SKthUfSBDWXm4OuptALKD1zHqSdYPLAHqjpifzQvEc2uN+dTV6abZiuyMOL14xVPZt7/veY2lrrjVsypJwu1F4l9oWRgS25bSEpR097dlO3qv3gQ1ebSe1F/a57MeKrSvFElSRRAUxmIqok4SWnQHx5VeFib0+2ZnMCd8hghaU1vMisG6RYDXU8axt7okB4hfc4zdYqRYNKYe9GH5YYAyCa+G9YtKX4+yoHCqpaePxPpfuvuFwdl1vb4EdX5XPfP4Z7J5p5D6qVjtkaYNx/OdIqb4sE0UFLDGrC+la36Mn2JpGCQXirTONeand7YyrxHZZE1yD9erbGtbSet8xt2RXinOpWu0AnJqwEdqSVJRBIWL1ZbxEHoPF6HjpDoSVN6OWf24TjNvyf3QbJr2z/pO3pskOhjiVvqsska9L919OsVl/1TOj20CrzcVDBVJodJHr+FHLci+icIms+3eTpc5Bnf5UaY4LpNE3F/Y2VuULgfl7GrDspL3oggq7RSfGsg1qBVCOf9J1+ES5CT1LyrZ/8KUexFTfAivN1Wa62zWigStGOPRmIe43j4DvC3gVIr90ZeNOXqBazDfvDsakuxn5zjejkAq+TGf3y9pmVgeNNB9TFUTnqYPG1RVvM4ERTTe9BWeshvPfo3kqPRzteifRREUtpeCWflhps+k7xISfhtX4K0vBIPTWUlDUdiIYdGLw970H24tjytH1HO45oWW2pVP0calenqNMT9e6PaFFYmQp9ouf6S7V0T9yNot93KiCIrXoKLa8gUh4VB6JZQyx3YU3t/n3m/y/jFW1BoUwowe3vOqD/otJE/ted2Xkgi94RCY793mmsdfsVFP8nsvrjNm+tKWOeYvrtnjGsdsc2G0hYVOaHe90jGHznO981D3rqSdwsNaYABGa0j3sAaXcDd5e41HhuNx0C8M0yzXowiK16DCCGqdwGm1VGG7C+iwEv5NKLghiQ4r1bNFrUF1mkLqJ8jrj/4cc0s4h55y4COR/PEJelLw0xseyMVpQbS2MAQGuiHCbex5J/QX+OHLMlh2GICtLknpL6ftI6V5L85BXcvRi9B6oIKMkyg3SVB7Hg8e/7jOdGJqp69xMKF8xjvHpy8ObafgOoaRsv261M+QlUOJQZy8SON9jRgRuQcpVc6pWQDf/hL6dZ68CSgo/1fBmIn3t8w7eqIDJ8amihsjojq3cv5LSEhkbSfGjVKJ9ObVNNtGVVFIZxch9bWx5MZtz1J/KTLPzgOUBIV5tmX9tZD60Vjy9uIR/P+atjNZd6+O2JX7xDUdPCxKF/ywTVaeCyx9umjCBz1MKCwRCfcUju9ksxVhf0Fs1qUO85Ko8tL5UVbBccoNvZvjdF2VElplOE24fkZ3SULBSs87ciLgK/QwTgkrfbqg/AUZrCjtv2CTv6MSodz2Yj4tcDygh3a0KJMmaoLyl6/0B7xAkTitnAQbtMQw3pF0TkrkV9Bfdpm/TzVvE3iQur3WflcKB7QLhXR+IoJ+3DSd3TIfxyDdlp2gIRRcn6if2PtU/ufgRqvmdXR00R+9/mN7ZoMhMOgu6Zk15aapO18cNl+5kWzre1MUueA52mjj9AWntnDR3LO+MUx4Sf+yLOyfZzYVyv2sp6RwKhx/faZNeRJUr0xN824vyi76xlPwdaGcHwrlTBASjvCOPTRhZzHFbNT72kD8r8zWwov3pA8SuC6J5IxhN7zYWM6nPQtJmS1iYYHElbrfw0djlZHHQ6SRi8fjuAECL0F6FkFGssKQF0nCpxdBaTMfaRmanYN6uVAwURS90JlHp+U880WgSILKtyace9URUO7nbQZG/Hv6sfGFAkNIK/iNkPBafKGDra/drnTMjcvz3VARRW6NB1teSI2sdRFeMDjnpOxBuca3ebn0AhFggioQbC7KigAGrcxoeLTfd062llPYTW+qwzleKP101ophWIuf303jRimKkPA+bnz41nzXbDotmDiT1UcvEegyJE7Y6MIahwuqBAJMUJVoptoL2fYosS6Z3gvTnTGnQgsFtensKaS+LGsFt5wFXtwnSr94fsLCbel4XmuzrDvy8JeGhOm1XEQutOMMeGFMUAPeAUpSfYLNcCO6f25JahQiBp4cVjTnDnA96Bd3t8x9L2WbAlz4wrA5aZFr3n9xGOMnvj5ZoCdlToxAVgSYoLIiyO9nRaBtPa3Kalx478c5V5hVXpL38UCqhItIKq3AbHsRmINvdD0XSBc91jI3PTsc+jfjkZbB8PT7X+eYd/4hMfmEbWXGsyDnDdSOPJKOwJlYEWCCssLDNwtAQMG5JHpawurqrb83zFuFZz7qR0hAIFnES0RatwoJh4mGeWMBXYWLGDQEmKAGrcXLVd/24eWwH+UJr+fhGLZIuHCdSlWGqBqioXcoEh4uawARYIIawEbPocoNs0377BV8U0wyG0aWMGTWE0qfSWo01Oa8p9JfFUpfQwoOhWXV3jZ/tsCQI5wYgSIQYIIqAuV6l9E+n7q6S59KdKzg/NDzYNPxKI4eNPBHt4JvUuy87i4PptQP5Lb/pxmCwn9VJoLSD3meDwb1FH39elZ1asQEVZ22KqukEs7qIotMujDR8odvCtBsV1Z4aORSzu5CwgUFAo2bHppCjaNrERrkOJcqI4A+4agUSpVxYNnTI6DgBbI+lKov6ivSC1+1N9FLBfqEkvoqoUATA7+mvbPQPaB6u02q1pAsbywEGs7Hyfr4RPOGWGXyQ/VBQLqfI+s/achJgiPQj+FAJs+lkvt5zyOz0rOF1A8mbIzFQsJMoZzjBW7QwIVBToxAmRDwvLGknVbpea9M9WJZikFA6UsT6kTftFxP/0lDUBjFgFMPAuhV2AtE5htcRi0AAAHgSURBVDk3PNrnkXkf0YAPsZPWHrz433IjoGA+iZIpdy1ZOmoEvDA3FCSTNg/9OHWVOD9GgBEoGwLerqq0SsL3Hk/xla1l85VHwrEkP2xSWU7o6s3ZI98Kcu6MACNQDgSUfi6zsilHTViKohBQcEfmPpOanOCcoqrJ5TACjMB4I4DBAiVAJoXDFtR4t2Jx5Xs+T33Wc1qiSfMeRo8+zbyuuMpySYwAIzD+CHieVjLsXGWCGv82LEoCjMeXhlyyviP1UoGb1zgxAozAACLQdPdNrXgGEK6BrbKE51P3k9QkpZcJ9FrBiRFgBAYYgbRnWwYYsoGqunI/Wzw5wVzRMBsPFM5cWUaAEQhBIA1JhWTFl2uGAKkH8hjrWFL/rGYIcnUYAUYgMwJJSSpzgZxBJRBQ+gOFWFDocBbPlXJiBBgBRiAQgaa7t5DwagyFtDjwfb5YTwSk8wkh4d4Y/SKF5wh9tecIoZ7Ica0YAUaAFAGp/1UouClCGR1OWiZnVg0EJBwqFNwQ0TeiSUrCS0LqX4up5j3VqDhLyQgwAuVCQMFOQupfCQW3iXbsMjPyK/rIcgnK0hSOwHSzgedvFKOXSxgSnvssvUQoWDFCXusEHgZHf6YSbhFSX+IRkoJjquQR4v8BTrweQ++TvzwAAAAASUVORK5CYII=" id="img_lpay_logo_svg__b" width={424} height={115} /></defs></svg>;
export default SvgImgLpayLogo;