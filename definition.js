const ColorBlock = '#cb2026';
const ImgUrl = 'https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_extension_rover/images/';

Blockly.Blocks['robocon_follow_line_until'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_follow_line_until",
        "message0": "dò line tốc độ %1 đến khi %2 tối đa %3 giây",
        "args0": [
          {
              type: "input_value",
              check: "Number",
              value: 50,
              name: "speed",
          },
          {
              "type": "input_value",
              "name": "condition",
          },
          {
              type: "input_value",
              check: "Number",
              name: "timeout",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python["robocon_follow_line_until"] = function (block) {
  Blockly.Python.definitions_['import_rover'] = 'from rover import *';
  Blockly.Python.definitions_['import_robocon'] = 'from robocon import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "follow_line_until(" + speed + ", " + "lambda: (" + condition  + "), " + timeout*1000 +")\n";
  return code;
};

Blockly.Blocks['robocon_follow_line_delay'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_follow_line_delay",
        "message0": "dò line với tốc độ %1 (0-100) trong %2 giây",
        "args0": [
          
          {
            min: 0,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            name: "timeout",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_follow_line_delay"] = function (block) {
  Blockly.Python.definitions_['import_rover'] = 'from rover import *';
  Blockly.Python.definitions_['import_robocon'] = 'from robocon import *';
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "follow_line_until(" + speed + ", " + "lambda: (False), " + timeout*1000 +")\n";
  return code;
};

Blockly.Blocks['robocon_turn_until_line_detected'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_move_motor",
        "message0": "quay động cơ trái %1 phải %2 đến khi gặp vạch đen tối đa %3 giây",
        "args0": [
          {
            "type": "input_value",
            "name": "m1_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "m2_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "timeout",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_turn_until_line_detected"] = function (block) {
  Blockly.Python.definitions_['import_rover'] = 'from rover import *';
  Blockly.Python.definitions_['import_robocon'] = 'from robocon import *';
  var m1_speed = Blockly.Python.valueToCode(block, 'm1_speed', Blockly.Python.ORDER_ATOMIC);
  var m2_speed = Blockly.Python.valueToCode(block, 'm2_speed', Blockly.Python.ORDER_ATOMIC);
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "turn_until_line_detected(" + m1_speed + ", " + m2_speed + ", " + timeout*1000 +")\n";
  return code;
};

Blockly.Blocks['robocon_turn_until_condition'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "robocon_turn_until_condition",
        "message0": "quay động cơ trái %1 phải %2 đến khi %3 tối đa %4 giây",
        "args0": [
          {
            "type": "input_value",
            "name": "m1_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "m2_speed",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "condition",
            "check": "Boolean",
          },
          {
            "type": "input_value",
            "name": "timeout",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robocon_turn_until_condition"] = function (block) {
  Blockly.Python.definitions_['import_rover'] = 'from rover import *';
  Blockly.Python.definitions_['import_robocon'] = 'from robocon import *';
  var m1_speed = Blockly.Python.valueToCode(block, 'm1_speed', Blockly.Python.ORDER_ATOMIC);
  var m2_speed = Blockly.Python.valueToCode(block, 'm2_speed', Blockly.Python.ORDER_ATOMIC);
  var condition = Blockly.Python.valueToCode(block, 'condition', Blockly.Python.ORDER_ATOMIC);
  var timeout = Blockly.Python.valueToCode(block, 'timeout', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "turn_until_condition(" + m1_speed + ", " + m2_speed + ", " + "lambda: (" + condition  + "), " + timeout*1000 +")\n";
  return code;
};

Blockly.Blocks['control_servo'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "control_servo",
        "message0": "servo %1 quay %2 độ tốc độ %3 (0-100)",
        "args0": [
          {
            type: "field_dropdown",
            name: "pin",
            options: [
            ["S1", "1"],
            ["S2", "2"],
            ]
          },
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number",
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["control_servo"] = function (block) {
  Blockly.Python.definitions_['import_rover'] = 'from rover import *';
  Blockly.Python.definitions_['import_robocon'] = 'from robocon import *';
  var angle_servo = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var dropdown_pin = block.getFieldValue('pin');
  var servo_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "set_servo_position(" + dropdown_pin + ", " + angle_servo + ", " + servo_speed+")\n";
  return code;
};

Blockly.Blocks['control_gripper'] = {
  init: function () {
    this.jsonInit(
      {
        "type": "control_gripper",
        "message0": "robot %1 quà",
        "args0": [     
          {
            type: "field_dropdown",
            name: "action",
            options: [
            ["gắp", "collect"],
            ["thả", "release"],
            ]
          }     
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": ColorBlock,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["control_gripper"] = function (block) {
  Blockly.Python.definitions_['import_rover'] = 'from rover import *';
  Blockly.Python.definitions_['import_robocon'] = 'from robocon import *';
  var dropdown_type = block.getFieldValue('action');
  // TODO: Assemble Python into code variable.
  var code = "";
  if (dropdown_type == 'collect')
    code = "set_servo_position(1, 0, 80)\n" + "time.sleep_ms(1000)\n" + "set_servo_position(2, 90, 80)" + "time.sleep_ms(1000)\n";
  else
    code = "set_servo_position(2, 0, 80)\n" + "time.sleep_ms(1000)\n" + "set_servo_position(1, 90, 80)" + "time.sleep_ms(1000)\n";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
