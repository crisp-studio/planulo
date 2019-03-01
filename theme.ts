import { deepFreeze } from "grommet/utils";

const planulo = deepFreeze({
  global: {
    colors: {
      icon: {
        "0": "#",
        "1": "6",
        "2": "6",
        "3": "6",
        "4": "6",
        "5": "6",
        "6": "6",
        dark: "#f8f8f8",
        light: "#666666"
      },
      active: "rgba(221,221,221,0.5)",
      black: "#102A43",
      border: {
        dark: "rgba(255,255,255,0.33)",
        light: "rgba(0,0,0,0.33)"
      },
      brand: "#4098D7",
      control: {
        dark: "accent-1",
        light: "brand"
      },
      focus: "#FCE588",
      placeholder: "#AAAAAA",
      selected: "#4098D7",
      text: {
        dark: "dark-2",
        light: "light-1"
      },
      white: "#ffffff",
      "brand-1": "#DCEEFB",
      "brand-2": "#B6E0FE",
      "brand-3": "#84C5F4",
      "brand-4": "#62B0E8",
      "brand-5": "#4098D7",
      "brand-6": "#2680C2",
      "brand-7": "#186FAF",
      "brand-8": "#0A558C",
      "accent-1": "#FFFBEA",
      "accent-2": "#FCE588",
      "accent-3": "#F7C948",
      "accent-4": "#CB6E17",
      "dark-1": "#102A43",
      "dark-2": "#243B53",
      "dark-3": "#334E68",
      "dark-4": "#486581",
      "dark-5": "#627D98",
      "dark-6": "#829AB1",
      "light-1": "#F0F4F8",
      "light-2": "#D9E2EC",
      "light-3": "#BCCCDC",
      "light-4": "#9FB3C8",
      "light-5": "#829AB1",
      "light-6": "#627D98",
      "neutral-1": "#00873D",
      "neutral-2": "#3D138D",
      "neutral-3": "#00739D",
      "neutral-4": "#A2423D",
      "status-critical": "#FF4040",
      "status-error": "#FF4040",
      "status-warning": "#FFAA15",
      "status-ok": "#00C781",
      "status-unknown": "#CCCCCC",
      "status-disabled": "#CCCCCC"
    },
    animation: {
      duration: "0.25s",
      jiggle: {
        duration: "0.1s"
      }
    },
    borderSize: {
      xsmall: "1px",
      small: "2px",
      medium: "4px",
      large: "12px",
      xlarge: "24px"
    },
    breakpoints: {
      small: {
        value: 768,
        borderSize: {
          xsmall: "1px",
          small: "2px",
          medium: "4px",
          large: "6px",
          xlarge: "12px"
        },
        edgeSize: {
          none: "0px",
          hair: "1px",
          xxsmall: "2px",
          xsmall: "3px",
          small: "6px",
          medium: "12px",
          large: "24px",
          xlarge: "48px"
        },
        size: {
          xxsmall: "24px",
          xsmall: "48px",
          small: "96px",
          medium: "192px",
          large: "384px",
          xlarge: "768px",
          full: "100%"
        }
      },
      medium: {
        value: 1536
      },
      large: {}
    },
    deviceBreakpoints: {
      phone: "small",
      tablet: "medium",
      computer: "large"
    },
    control: {
      border: {
        width: "1px",
        radius: "4px",
        color: "border"
      }
    },
    debounceDelay: 300,
    drop: {
      background: "#ffffff",
      border: {
        width: "0px",
        radius: "6px"
      },
      shadowSize: "small",
      zIndex: "20"
    },
    edgeSize: {
      none: "0px",
      hair: "1px",
      xxsmall: "3px",
      xsmall: "6px",
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px",
      responsiveBreakpoint: "small"
    },
    elevation: {
      light: {
        none: "none",
        xsmall: "0px 1px 2px rgba(0, 0, 0, 0.20)",
        small: "0px 2px 4px rgba(0, 0, 0, 0.20)",
        medium: "0px 4px 8px rgba(0, 0, 0, 0.20)",
        large: "0px 8px 16px rgba(0, 0, 0, 0.20)",
        xlarge: "0px 12px 24px rgba(0, 0, 0, 0.20)"
      },
      dark: {
        none: "none",
        xsmall: "0px 2px 2px rgba(255, 255, 255, 0.40)",
        small: "0px 4px 4px rgba(255, 255, 255, 0.40)",
        medium: "0px 6px 8px rgba(255, 255, 255, 0.40)",
        large: "0px 8px 16px rgba(255, 255, 255, 0.40)",
        xlarge: "0px 12px 24px rgba(255, 255, 255, 0.40)"
      }
    },
    focus: {
      border: {
        color: "focus"
      }
    },
    font: {
      size: "16px",
      height: "24px",
      maxWidth: "432px",
      family: "'Inter', sans-serif"
    },
    hover: {
      background: {
        dark: {
          color: "active",
          opacity: "medium"
        },
        light: {
          color: "active",
          opacity: "medium"
        }
      },
      color: {
        dark: "white",
        light: "black"
      }
    },
    input: {
      padding: "12px",
      weight: 600
    },
    opacity: {
      strong: 0.8,
      medium: 0.4,
      weak: 0.1
    },
    selected: {
      background: "selected",
      color: "white"
    },
    spacing: "24px",
    size: {
      xxsmall: "48px",
      xsmall: "96px",
      small: "192px",
      medium: "384px",
      large: "768px",
      xlarge: "1152px",
      xxlarge: "1536px",
      full: "100%"
    }
  },
  icon: {
    size: {
      small: "12px",
      medium: "24px",
      large: "48px",
      xlarge: "96px"
    }
  },
  accordion: {
    icons: {}
  },
  anchor: {
    textDecoration: "none",
    fontWeight: 600,
    color: {
      dark: "accent-1",
      light: "brand"
    },
    hover: {
      textDecoration: "underline"
    }
  },
  box: {
    responsiveBreakpoint: "small"
  },
  button: {
    border: {
      width: "2px",
      radius: "6px"
    },
    color: { dark: "light-1", light: "light-1" },
    disabled: {
      opacity: 0.3
    },
    minWidth: "96px",
    maxWidth: "384px",
    padding: {
      vertical: "6px",
      horizontal: "12px"
    }
  },
  calendar: {
    small: {
      fontSize: "14px",
      lineHeight: 1.375,
      daySize: "27.428571428571427px",
      slideDuration: "0.2s"
    },
    medium: {
      fontSize: "18px",
      lineHeight: 1.45,
      daySize: "54.857142857142854px",
      slideDuration: "0.5s"
    },
    large: {
      fontSize: "30px",
      lineHeight: 1.11,
      daySize: "109.71428571428571px",
      slideDuration: "0.8s"
    },
    icons: {
      small: {}
    }
  },
  carousel: {
    icons: {}
  },
  checkBox: {
    border: {
      color: {
        dark: "rgba(255, 255, 255, 0.5)",
        light: "rgba(0, 0, 0, 0.15)"
      },
      width: "2px"
    },
    check: {
      radius: "4px",
      thickness: "4px"
    },
    icon: {},
    icons: {},
    hover: {
      border: {
        color: {
          dark: "white",
          light: "black"
        }
      }
    },
    size: "24px",
    toggle: {
      color: {
        dark: "#d9d9d9",
        light: "#d9d9d9"
      },
      radius: "24px",
      size: "48px",
      knob: {}
    }
  },
  clock: {
    analog: {
      hour: {
        color: {
          dark: "light-2",
          light: "dark-3"
        },
        width: "8px",
        size: "24px",
        shape: "round"
      },
      minute: {
        color: {
          dark: "light-4",
          light: "dark-3"
        },
        width: "4px",
        size: "12px",
        shape: "round"
      },
      second: {
        color: {
          dark: "accent-1",
          light: "accent-1"
        },
        width: "3px",
        size: "9px",
        shape: "round"
      },
      size: {
        small: "72px",
        medium: "96px",
        large: "144px",
        xlarge: "216px",
        huge: "288px"
      }
    },
    digital: {
      text: {
        xsmall: {
          size: "10px",
          height: 1.5
        },
        small: {
          size: "14px",
          height: 1.43
        },
        medium: {
          size: "18px",
          height: 1.375
        },
        large: {
          size: "22px",
          height: 1.167
        },
        xlarge: {
          size: "26px",
          height: 1.1875
        },
        xxlarge: {
          size: "34px",
          height: 1.125
        }
      }
    }
  },
  collapsible: {
    minSpeed: 200,
    baseline: 500
  },
  dataTable: {
    header: {},
    groupHeader: {
      border: {
        side: "bottom",
        size: "xsmall"
      },
      fill: "vertical",
      pad: {
        horizontal: "small",
        vertical: "xsmall"
      },
      background: {
        dark: "dark-2",
        light: "light-2"
      }
    },
    icons: {},
    resize: {
      border: {
        side: "right",
        color: "border"
      }
    },
    primary: {
      weight: "bold"
    }
  },
  formField: {
    border: {
      color: "border",
      position: "inner",
      side: "bottom",
      error: {
        color: {
          dark: "white",
          light: "status-critical"
        }
      }
    },
    error: {
      color: {
        dark: "status-critical",
        light: "status-critical"
      }
    },
    help: {
      color: {
        dark: "dark-3",
        light: "dark-3"
      }
    },
    label: {}
  },
  grommet: {},
  heading: {
    font: {},
    level: {
      "1": {
        font: {},
        small: {
          size: "34px",
          height: "40px",
          maxWidth: "816px"
        },
        medium: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px"
        },
        large: {
          size: "82px",
          height: "88px",
          maxWidth: "1968px"
        },
        xlarge: {
          size: "114px",
          height: "120px",
          maxWidth: "2736px"
        }
      },
      "2": {
        font: {},
        small: {
          size: "26px",
          height: "32px",
          maxWidth: "624px"
        },
        medium: {
          size: "34px",
          height: "40px",
          maxWidth: "816px"
        },
        large: {
          size: "50px",
          height: "56px",
          maxWidth: "1200px"
        },
        xlarge: {
          size: "66px",
          height: "72px",
          maxWidth: "1584px"
        }
      },
      "3": {
        font: {},
        small: {
          size: "22px",
          height: "28px",
          maxWidth: "528px"
        },
        medium: {
          size: "26px",
          height: "32px",
          maxWidth: "624px"
        },
        large: {
          size: "34px",
          height: "40px",
          maxWidth: "816px"
        },
        xlarge: {
          size: "42px",
          height: "48px",
          maxWidth: "1008px"
        }
      },
      "4": {
        font: {},
        small: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        },
        medium: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        },
        large: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        },
        xlarge: {
          size: "18px",
          height: "24px",
          maxWidth: "432px"
        }
      },
      "5": {
        font: {},
        small: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        },
        medium: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        },
        large: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        },
        xlarge: {
          size: "16px",
          height: "22px",
          maxWidth: "384px"
        }
      },
      "6": {
        font: {},
        small: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        },
        medium: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        },
        large: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        },
        xlarge: {
          size: "14px",
          height: "20px",
          maxWidth: "336px"
        }
      }
    },
    responsiveBreakpoint: "small",
    weight: 600
  },
  layer: {
    background: "white",
    border: {
      radius: "6px"
    },
    container: {
      zIndex: "15"
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.5)"
    },
    responsiveBreakpoint: "small",
    zIndex: "10"
  },
  menu: {
    icons: {}
  },
  paragraph: {
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px"
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px"
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px"
    }
  },
  radioButton: {
    border: {
      color: {
        dark: "rgba(0, 0, 0, 0.15)",
        light: "rgba(0, 0, 0, 0.15)"
      },
      width: "2px"
    },
    check: {
      radius: "100%"
    },
    hover: {
      border: {
        color: {
          dark: "white",
          light: "rgba(0, 0, 0, 0.15)"
        }
      }
    },
    icon: {},
    icons: {},
    gap: "small",
    size: "24px"
  },
  rangeInput: {
    track: {
      height: "4px",
      color: [null, ";"]
    },
    thumb: {}
  },
  select: {
    container: {},
    control: {},
    icons: {},
    step: 20
  },
  tab: {
    active: {
      color: "text"
    },
    border: {
      side: "bottom",
      size: "small",
      color: {
        dark: "accent-1",
        light: "brand"
      },
      active: {
        color: {
          dark: "white",
          light: "black"
        }
      },
      hover: {
        color: {
          dark: "white",
          light: "black"
        }
      }
    },
    color: "control",
    hover: {
      color: {
        dark: "white",
        light: "black"
      }
    },
    margin: {
      vertical: "xxsmall",
      horizontal: "small"
    },
    pad: {
      bottom: "xsmall"
    }
  },
  tabs: {
    header: {},
    panel: {}
  },
  table: {
    header: {
      align: "start",
      pad: {
        horizontal: "small",
        vertical: "xsmall"
      },
      border: "bottom",
      verticalAlign: "bottom",
      fill: "vertical"
    },
    body: {
      align: "start",
      pad: {
        horizontal: "small",
        vertical: "xsmall"
      }
    },
    footer: {
      align: "start",
      pad: {
        horizontal: "small",
        vertical: "xsmall"
      },
      border: "top",
      verticalAlign: "top",
      fill: "vertical"
    }
  },
  text: {
    xsmall: {
      size: "12px",
      height: "18px",
      maxWidth: "288px"
    },
    small: {
      size: "14px",
      height: "20px",
      maxWidth: "336px"
    },
    medium: {
      size: "18px",
      height: "24px",
      maxWidth: "432px"
    },
    large: {
      size: "22px",
      height: "28px",
      maxWidth: "528px"
    },
    xlarge: {
      size: "26px",
      height: "32px",
      maxWidth: "624px"
    },
    xxlarge: {
      size: "34px",
      height: "40px",
      maxWidth: "816px"
    }
  },
  video: {
    captions: {
      background: "rgba(0, 0, 0, 0.7)"
    },
    icons: {}
  },
  worldMap: {
    color: "light-3",
    continent: {
      active: "8px",
      base: "6px"
    },
    hover: {
      color: "light-4"
    },
    place: {
      active: "20px",
      base: "8px"
    }
  },
  checkbox: {
    border: {
      color: {
        dark: "rgba(0, 0, 0, 0.15)",
        light: "rgba(0, 0, 0, 0.15)"
      },
      width: "2px"
    },
    check: {
      radius: "6px",
      thickness: "4px"
    },
    icon: {},
    icons: {},
    hover: {
      border: {
        color: {
          dark: "white",
          light: "black"
        }
      }
    },
    size: "24px",
    toggle: {
      color: {
        dark: "#d9d9d9",
        light: "#d9d9d9"
      },
      radius: "24px",
      size: "48px",
      knob: {}
    }
  }
});

export default planulo;
